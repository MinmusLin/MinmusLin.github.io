# VitePress 构建与部署

以下指南基于一些前提：

* VitePress 站点位于项目的 `docs` 目录中。
* 使用的是默认生成输出目录（`.vitepress/dist`）。
* VitePress 作为本地依赖项安装在项目中，并已在 `package.json` 中设置以下脚本：

  ```JSON [package.json]
  {
    ...
    "scripts": {
      "dev": "vitepress dev docs",
      "build": "vitepress build docs",
      "preview": "vitepress preview docs"
    }
    ...
  }
  ```

## 项目开发与构建

### 开发模式

运行以下命令启动开发服务器：

::: code-group
```Shell [npm]
npm run dev
```

```Shell [pnpm]
pnpm dev
```

```Shell [yarn]
yarn dev
```

```Shell [bun]
bun run dev
```
:::

开发服务器将在 http://localhost:5173 运行，支持热重载功能。

### 生产构建

执行构建命令生成静态文件：

::: code-group
```Shell [npm]
npm run build
```

```Shell [pnpm]
pnpm build
```

```Shell [yarn]
yarn build
```

```Shell [bun]
bun run build
```
:::

构建产物将输出到 `docs/.vitepress/dist` 目录。

### 生产预览

构建完成后，可通过以下命令预览生产环境效果：

::: code-group
```Shell [npm]
npm run preview
```

```Shell [pnpm]
pnpm preview
```

```Shell [yarn]
yarn preview
```

```Shell [bun]
bun run preview
```
:::

预览服务器将在 http://localhost:4173 启动，使用构建生成的静态文件提供服务。

::: tip
可以通过传递 `--port` 作为参数来配置服务器端口。

```JSON
{
  ...
  "scripts": {
    "dev": "vitepress dev docs --port 8000",
    "build": "vitepress build docs",
    "preview": "vitepress preview docs --port 8001"
  }
  ...
}
```

现在 `dev` 方法和 `preview` 方法将会分别在 http://localhost:8000 和 http://localhost:8001 启动服务。
:::

## GitHub Pages 项目部署

1. 在 `.github/workflows` 目录中创建一个 `pipeline.yml` GitHub Actions 工作流配置文件，用于自动化部署 VitePress 站点到 GitHub Pages。

``` YML [.github/workflows/pipeline.yml]
name: Pipeline

# 手动触发或 main 分支推送触发
on:
  workflow_dispatch:
  push:
    branches:
      - main

# 设置 GITHUB_TOKEN 权限
permissions:
  contents: read
  pages: write
  id-token: write

# 并发组控制
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    name: Build
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Set up pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 9
      - name: Set up node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm
      - name: Set up GitHub Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: pnpm install
      - name: Build with VitePress
        run: pnpm build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. 在存储库设置中的“Pages”菜单项下，选择“Build and deployment > Source > GitHub Actions”。

3. 将更改推送到 `main` 分支并等待 GitHub Actions 工作流完成。VitePress 站点将在每次推送到 `main` 分支时自动部署。

::: warning 确保 VitePress 中 `base` 选项配置正确
VitePress 默认站点部署在域名根路径（如 https://www.minmuslin.cn ）。当需要部署到子路径时（如 https://www.minmuslin.cn/blog ），必须正确配置 `base` 选项为 `'/blog/'` 以确保资源路径解析正确。

```TypeScript
export default defineConfig({
  ...
  base: '/blog/'
  ...
})
```
:::

## HTTP 缓存标头

如果可以控制生产服务器上的 HTTP 标头，则可以配置 `cache-control` 标头以在重复访问时获得更好的性能。

生产版本对静态资源（JavaScript、CSS 和其他非 `public` 目录中的导入资源）使用哈希文件名。如果使用浏览器开发工具的网络选项卡查看生产预览，将看到类似 `app.4f283b18.js` 的文件，此哈希 `4f283b18` 是从此文件的内容生成的。相同的哈希 URL 保证提供相同的文件内容。

所有此类文件都放置在输出目录的 `assets` 中，可以安全地为这些文件使用最强的缓存标头：

```
Cache-Control: max-age=31536000,immutable
```

::: details Netlify 示例 `_headers` 文件
```
/assets/*
  cache-control: max-age=31536000
  cache-control: immutable
```

注意：该 `_headers` 文件应放置在 public 目录中。

[Netlify 标头配置文档](https://docs.netlify.com/routing/headers)
:::

::: details Vercel 示例 `vercel.json` 文件
```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

注意：该 `vercel.json` 文件应放置在存储库的根目录中。

[Vercel 标头配置文档](https://vercel.com/docs/concepts/projects/project-configuration#headers)
:::
