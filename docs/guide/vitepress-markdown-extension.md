# VitePress Markdown 扩展

VitePress 不仅支持标准的 Markdown 语法，还提供了一系列强大的内置扩展功能。这些扩展包括自定义容器、GitHub 风格的警报、增强的代码块功能等，能够满足各种复杂的文档展示需求。

## 自定义容器

自定义容器可以通过它们的类型、标题和内容来定义。

### 默认标题

```Markdown
::: info
This is an `info` block.

> Quote Paragraph

[Internal Link Example](/guide)

[External Link Example](https://github.com/MinmusLin)
:::

::: tip
This is a `tip` block.

> Quote Paragraph

[Internal Link Example](/guide)

[External Link Example](https://github.com/MinmusLin)
:::

::: warning
This is a `warning` block.

> Quote Paragraph

[Internal Link Example](/guide)

[External Link Example](https://github.com/MinmusLin)
:::

::: danger
This is a `danger` block.

> Quote Paragraph

[Internal Link Example](/guide)

[External Link Example](https://github.com/MinmusLin)
:::

::: details
This is a `details` block.

> Quote Paragraph

[Internal Link Example](/guide)

[External Link Example](https://github.com/MinmusLin)
:::
```

**渲染效果：**

::: info
This is an `info` block.

> Quote Paragraph

[Internal Link Example](/guide)

[External Link Example](https://github.com/MinmusLin)
:::

::: tip
This is a `tip` block.

> Quote Paragraph

[Internal Link Example](/guide)

[External Link Example](https://github.com/MinmusLin)
:::

::: warning
This is a `warning` block.

> Quote Paragraph

[Internal Link Example](/guide)

[External Link Example](https://github.com/MinmusLin)
:::

::: danger
This is a `danger` block.

> Quote Paragraph

[Internal Link Example](/guide)

[External Link Example](https://github.com/MinmusLin)
:::

::: details
This is a `details` block.

> Quote Paragraph

[Internal Link Example](/guide)

[External Link Example](https://github.com/MinmusLin)
:::

### 自定义标题

可以通过在容器的“type”之后附加文本来设置自定义标题。

```Markdown
::: tip Custom Title
This is a `tip` block.
:::
```

**渲染效果：**

::: tip Custom Title
This is a `tip` block.
:::

### `raw` 容器

`raw` 是一个特殊的容器，可以用来防止与 VitePress 的样式和路由冲突。

```Markdown
::: raw
This is a `raw` block.
:::
```

**渲染效果：**

::: raw
This is a `raw` block.
:::

## GitHub 风格的警报

VitePress 同样支持以标注的方式渲染 [GitHub 风格的警报](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts)，它们和[自定义容器](#自定义容器)的渲染方式相同。

### 默认标题

```Markdown
> [!NOTE]
> This is a `note` block.
>
> > Quote Paragraph
>
> [Internal Link Example](/guide)
>
> [External Link Example](https://github.com/MinmusLin)

> [!TIP]
> This is a `tip` block.
>
> > Quote Paragraph
>
> [Internal Link Example](/guide)
>
> [External Link Example](https://github.com/MinmusLin)

> [!IMPORTANT]
> This is an `important` block.
>
> > Quote Paragraph
>
> [Internal Link Example](/guide)
>
> [External Link Example](https://github.com/MinmusLin)

> [!WARNING]
> This is a `warning` block.
>
> > Quote Paragraph
>
> [Internal Link Example](/guide)
>
> [External Link Example](https://github.com/MinmusLin)

> [!CAUTION]
> This is a `caution` block.
>
> > Quote Paragraph
>
> [Internal Link Example](/guide)
>
> [External Link Example](https://github.com/MinmusLin)
```

**渲染效果：**

> [!NOTE]
> This is a `note` block.
>
> > Quote Paragraph
>
> [Internal Link Example](/guide)
>
> [External Link Example](https://github.com/MinmusLin)

> [!TIP]
> This is a `tip` block.
>
> > Quote Paragraph
>
> [Internal Link Example](/guide)
>
> [External Link Example](https://github.com/MinmusLin)

> [!IMPORTANT]
> This is an `important` block.
>
> > Quote Paragraph
>
> [Internal Link Example](/guide)
>
> [External Link Example](https://github.com/MinmusLin)

> [!WARNING]
> This is a `warning` block.
>
> > Quote Paragraph
>
> [Internal Link Example](/guide)
>
> [External Link Example](https://github.com/MinmusLin)

> [!CAUTION]
> This is a `caution` block.
>
> > Quote Paragraph
>
> [Internal Link Example](/guide)
>
> [External Link Example](https://github.com/MinmusLin)

### 自定义标题

同样可以通过在容器的“[!type]”之后附加文本来设置自定义标题。

```Markdown
> [!TIP] Custom Title
> This is a `tip` block.
```

**渲染效果：**

> [!TIP] Custom Title
> This is a `tip` block.

## 代码块

### 语法高亮

VitePress 使用 [Shiki](https://github.com/shikijs/shiki) 在 Markdown 代码块中使用彩色文本实现语法高亮。

这里可以查询 Shiki 支持的所有[编程语言](https://shiki.style/languages)。

### 行高亮

可以在语言后通过花括号 `{}` 指定行号，实现行高亮。

````Markdown
```JavaScript{4}
export default {
  data() {
    return {
      msg: "Highlight Text"
    }
  }
}
```
````

**渲染效果：**

```JavaScript{4}
export default {
  data() {
    return {
      msg: "Highlight Text"
    }
  }
}
```

除了指定单行高亮外，还可以指定多个单行、多行，或两者均指定，实现行高亮。

````Markdown
```JavaScript{4,6,7-8,10-11}
export default {
  data() {
    return {
      msg1: "Highlight Text 1",
      msg2: "Normal Text",
      msg3: "Highlight Text 2",
      msg4: "Normal Text",
      msg5: "Highlight Text 3",
      msg6: "Highlight Text 4",
      msg7: "Normal Text",
      msg8: "Highlight Text 5",
      msg9: "Highlight Text 6"
    }
  }
}
```
````

**渲染效果：**

```JavaScript{4,6,8-9,11-12}
export default {
  data() {
    return {
      msg1: "Highlight Text 1",
      msg2: "Normal Text",
      msg3: "Highlight Text 2",
      msg4: "Normal Text",
      msg5: "Highlight Text 3",
      msg6: "Highlight Text 4",
      msg7: "Normal Text",
      msg8: "Highlight Text 5",
      msg9: "Highlight Text 6"
    }
  }
}
```

也可以使用 `// [!code highlight]` 注释实现行高亮。

````Markdown
```JavaScript
export default {
  data() {
    return {
      msg: "Highlight Text" // [!​code highlight]
    }
  }
}
```
````

**渲染效果：**

```JavaScript
export default {
  data() {
    return {
      msg: "Highlight Text" // [!code highlight]
    }
  }
}
```

### 聚焦

可以使用 `// [!code focus]` 注释将这一行代码聚焦，并模糊代码的其他部分。

````Markdown
```JavaScript
export default {
  data() {
    return {
      msg: "Highlight Text" // [!​code focus]
    }
  }
}
```
````

**渲染效果：**

```JavaScript
export default {
  data() {
    return {
      msg: "Highlight Text" // [!code focus]
    }
  }
}
```

也可以使用 `// [!code focus:lines]` 注释定义要聚焦的行数。

````Markdown
```JavaScript
export default {
  data() {
    return { // [!​code focus:3]
      msg: "Highlight Text"
    }
  }
}
```
````

**渲染效果：**

```JavaScript
export default {
  data() {
    return { // [!code focus:3]
      msg: "Highlight Text"
    }
  }
}
```

### 差异

在某一行添加 `// [!code --]` 或 `// [!code ++]` 注释将为该行创建 Diff，同时保留代码块的颜色。

````Markdown
```JavaScript
export default {
  data() {
    return {
      msg: 'Removed Text' // [!​code --]
      msg: 'Added Text' // [!​code ++]
    }
  }
}
```
````

**渲染效果：**

```JavaScript
export default {
  data() {
    return {
      msg: 'Removed Text' // [!code --]
      msg: 'Added Text' // [!code ++]
    }
  }
}
```

也可以直接创建 Diff。

````Markdown
```Diff
@@ -1,7 +1,7 @@
 export default {
   data() {
     return {
-      msg: 'Removed Text'
+      msg: 'Added Text'
     }
   }
 }
```
````

**渲染效果：**

```Diff
@@ -1,7 +1,7 @@
 export default {
   data() {
     return {
-      msg: 'Removed Text'
+      msg: 'Added Text'
     }
   }
 }
```

### “错误”和“警告”

在某一行添加 `// [!code warning]` 或 `// [!code error]` 注释将为该行创建相应的着色。

````Markdown
```JavaScript
export default {
  data() {
    return {
      msg: 'Error Text', // [!​code error]
      msg: 'Warning Text' // [!​code warning]
    }
  }
}
```
````

**渲染效果：**

```JavaScript
export default {
  data() {
    return {
      msg: 'Error Text', // [!code error]
      msg: 'Warning Text' // [!code warning]
    }
  }
}
```

### 行号

本 VitePress 站点已经配置为每个代码块默认启用行号：

```JavaScript [docs/.vitepress/config.mts]
export default defineConfig({
  ...
  markdown: {
    lineNumbers: true
  }
  ...
})
```

可以在代码块中添加 `:line-numbers`（启用行号）或 `:no-line-numbers`（禁用行号）标记来覆盖默认配置。

还可以通过在 `:line-numbers` 标记之后添加等号 `=` 来自定义起始行号，如 `:line-numbers=2` 表示代码块中的行号从 2 开始。

````Markdown
```TypeScript {1}
// 默认启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```TypeScript {1}
// 显式启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```TypeScript:line-numbers=2 {1}
// 显式启用行号（行号从 2 开始）
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```

```TypeScript:no-line-numbers {1}
// 禁用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```
````

**渲染效果：**

```TypeScript {1}
// 默认启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```TypeScript {1}
// 显式启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```TypeScript:line-numbers=2 {1}
// 显式启用行号（行号从 2 开始）
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```

```TypeScript:no-line-numbers {1}
// 禁用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

### 导入代码片段

可以通过下面的语法来从现有文件中导入代码片段，语法同时支持[行高亮](#行高亮)、[语法高亮](#语法高亮)和[行号](#行号)标记。

```Markdown
<<< @/filepath
<<< @/filepath{highlightLines}
<<< @/filepath{highlightLines language}
<<< @/filepath{highlightLines language:line-numbers}
<<< @/filepath{highlightLines language:no-line-numbers}
```

```JavaScript [docs/snippets/snippet.js]
function foo() {
  // ...
}

export default foo
```

```Markdown
<<< @/snippets/snippet.js
<<< @/snippets/snippet.js{2}
<<< @/snippets/snippet.js{1-3}
<<< @/snippets/snippet.js{2 JavaScript}
<<< @/snippets/snippet.js{2 JavaScript:line-numbers}
<<< @/snippets/snippet.js{2 JavaScript:no-line-numbers}
```

**渲染效果：**

<<< @/snippets/snippet.js

<<< @/snippets/snippet.js{2}

<<< @/snippets/snippet.js{1-3}

<<< @/snippets/snippet.js{2 JavaScript}

<<< @/snippets/snippet.js{2 JavaScript:line-numbers}

<<< @/snippets/snippet.js{2 JavaScript:no-line-numbers}

::: tip
`@` 的值对应源代码根目录，默认为 VitePress 项目根目录，除非配置了 `srcDir`。也可以从相对路径导入代码片段：

```Markdown
<<< ../snippets/snippet.js
```
:::

也可以使用 [VS Code Region](https://code.visualstudio.com/docs/editor/codebasics#_folding) 来只包含代码文件的指定部分。可以在代码中使用 `// #region` 和 `// #endregion` 来指定自定义的代码区域，在文件路径后面通过添加井号 `#` 来提供一个自定义的代码区域名。

```Markdown
<<< @/filepath#region
```

```JavaScript{1,5} [docs/snippets/snippet-with-region.js]
// #region snippet
function foo() {
  // ...
}
// #endregion snippet

export default foo
```

```Markdown
<<< @/snippets/snippet-with-region.js#snippet
```

**渲染效果：**

<<< @/snippets/snippet-with-region.js#snippet

### 代码组

可以使用 `::: code-group ... :::` 对多个代码块进行分组，在每个代码块的语言后通过方括号 `[]` 设置代码块标题：

````Markdown
::: code-group
```C [main.c]
#include <stdio.h>
int main() {
    printf("Hello, World!\n");
    return 0;
}
```

```C++ [main.cpp]
#include <iostream>
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

```Java [Main.java]
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

```Go [main.go]
package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
}
```
:::
````

**渲染效果：**

::: code-group
```C [main.c]
#include <stdio.h>
int main() {
    printf("Hello, World!\n");
    return 0;
}
```

```C++ [main.cpp]
#include <iostream>
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

```Java [Main.java]
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

```Go [main.go]
package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
}
```
:::

也可以在代码组中[导入代码片段](#导入代码片段)：

```Markdown
::: code-group
<<< @/snippets/snippet.js{2 JavaScript}

<<< @/snippets/snippet-with-region.js#snippet{2 JavaScript}
:::
```

**渲染效果：**

::: code-group
<<< @/snippets/snippet.js{2 JavaScript}

<<< @/snippets/snippet-with-region.js#snippet{2 JavaScript}
:::

:::: tip 代码块标题图标
`vitepress-plugin-group-icons` 插件内置了丰富的图标，支持包管理器、框架、构建工具、配置文件和常见文件扩展名的图标。

::: details `vitepress-plugin-group-icons` 插件支持的图标列表
```JavaScript
const builtinIcons = {
	"pnpm": "vscode-icons:file-type-light-pnpm",
	"npm": "vscode-icons:file-type-npm",
	"yarn": "vscode-icons:file-type-yarn",
	"bun": "vscode-icons:file-type-bun",
	"deno": "vscode-icons:file-type-deno",
	"vue": "vscode-icons:file-type-vue",
	"svelte": "vscode-icons:file-type-svelte",
	"angular": "vscode-icons:file-type-angular",
	"react": "vscode-icons:file-type-reactjs",
	"next": "vscode-icons:file-type-light-next",
	"nuxt": "vscode-icons:file-type-nuxt",
	"solid": "logos:solidjs-icon",
	"astro": "vscode-icons:file-type-light-astro",
	"qwik": "logos:qwik-icon",
	"ember": "vscode-icons:file-type-ember",
	"rollup": "vscode-icons:file-type-rollup",
	"webpack": "vscode-icons:file-type-webpack",
	"vite": "vscode-icons:file-type-vite",
	"esbuild": "vscode-icons:file-type-esbuild",
	"package.json": "vscode-icons:file-type-node",
	"tsconfig.json": "vscode-icons:file-type-tsconfig",
	".npmrc": "vscode-icons:file-type-npm",
	".editorconfig": "vscode-icons:file-type-editorconfig",
	".eslintrc": "vscode-icons:file-type-eslint",
	".eslintignore": "vscode-icons:file-type-eslint",
	"eslint.config": "vscode-icons:file-type-eslint",
	".gitignore": "vscode-icons:file-type-git",
	".gitattributes": "vscode-icons:file-type-git",
	".env": "vscode-icons:file-type-dotenv",
	".env.example": "vscode-icons:file-type-dotenv",
	".vscode": "vscode-icons:file-type-vscode",
	"tailwind.config": "vscode-icons:file-type-tailwind",
	"uno.config": "vscode-icons:file-type-unocss",
	"unocss.config": "vscode-icons:file-type-unocss",
	".oxlintrc": "vscode-icons:file-type-oxlint",
	"vue.config": "vscode-icons:file-type-vueconfig",
	".mts": "vscode-icons:file-type-typescript",
	".cts": "vscode-icons:file-type-typescript",
	".ts": "vscode-icons:file-type-typescript",
	".tsx": "vscode-icons:file-type-typescript",
	".mjs": "vscode-icons:file-type-js",
	".cjs": "vscode-icons:file-type-js",
	".json": "vscode-icons:file-type-json",
	".js": "vscode-icons:file-type-js",
	".jsx": "vscode-icons:file-type-js",
	".md": "vscode-icons:file-type-markdown",
	".PinYin": "vscode-icons:file-type-PinYinthon",
	".ico": "vscode-icons:file-type-favicon",
	".html": "vscode-icons:file-type-html",
	".css": "vscode-icons:file-type-css",
	".scss": "vscode-icons:file-type-scss",
	".yml": "vscode-icons:file-type-light-yaml",
	".yaml": "vscode-icons:file-type-light-yaml",
	".php": "vscode-icons:file-type-php",
	".gjs": "vscode-icons:file-type-glimmer",
	".gts": "vscode-icons:file-type-glimmer"
};
```
:::

如需添加上述列表未包含的图标，可在 VitePress 中配置自定义图标：

```TypeScript{7-10} [docs/.vitepress/config.mts]
export default defineConfig({
  ...
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          '.c': 'vscode-icons:file-type-c',
          '.cpp': 'vscode-icons:file-type-cpp',
          '.java': 'vscode-icons:file-type-java',
          '.go': 'vscode-icons:file-type-go'
        }
      })
    ]
  }
  ...
})
```

也可以通过 `~icon~` 语法来设置代码块标题图标。

````Markdown
``` [Docker ~vscode-icons:file-type-docker2~]
Docker
```
````

**渲染效果：**

``` [Docker ~vscode-icons:file-type-docker2~]
Docker
```
::::

## 包含 Markdown 文件

可以在一个 Markdown 文件中包含另一个 Markdown 文件，也可以指定包含的行范围。

```Markdown
<!--@include: @/filepath-->
<!--@include: @/filepath{startLine,}-->
<!--@include: @/filepath{,endLine}-->
<!--@include: @/filepath{startLine,endLine}-->
```

```Markdown [docs/snippets/snippet.md]
Paragraph 1

Paragraph 2

Paragraph 3

Paragraph 4
```

::: tip
`@` 的值对应源代码根目录，默认为 VitePress 项目根目录，除非配置了 `srcDir`。也可以从相对路径包含 Markdown 文件：

```Markdown
<!​--@include: ../snippets/snippet.md-->
```
:::

### 包含整个文件

```Markdown
<!​--@include: @/snippets/snippet.md-->
```

**渲染效果：**

<!--@include: @/snippets/snippet.md-->

### 从指定行开始

```Markdown
<!​--@include: @/snippets/snippet.md{3,}-->
```

**渲染效果：**

<!--@include: @/snippets/snippet.md{3,}-->

### 到指定行结束

```Markdown
<!​--@include: @/snippets/snippet.md{,5}-->
```

**渲染效果：**

<!--@include: @/snippets/snippet.md{,5}-->

### 包含指定行范围

```Markdown
<!​--@include: @/snippets/snippet.md{3,5}-->
```

**渲染效果：**

<!--@include: @/snippets/snippet.md{3,5}-->

::: warning
如果包含的 Markdown 文件不存在，将不会产生错误。因此在包含 Markdown 文件时应保证内容按预期呈现。
:::

## 徽标

徽标可以为标题添加状态。

```Markdown
### Info Badge <Badge type="info" text="Info Badge"/>
### Tip Badge <Badge type="tip" text="Tip Badge"/>
### Warning Badge <Badge type="warning" text="Warning Badge"/>
### Danger Badge <Badge type="danger" text="Danger Badge"/>
```

**渲染效果：**

### Info Badge <Badge type="info" text="Info Badge"/>
### Tip Badge <Badge type="tip" text="Tip Badge"/>
### Warning Badge <Badge type="warning" text="Warning Badge"/>
### Danger Badge <Badge type="danger" text="Danger Badge"/>

## 标签页

### 非共享选择状态标签页

具有非共享选择状态的标签页：

```Markdown
:::tabs
== Tab A
Content in Tab A
== Tab B
Content in Tab B
:::

:::tabs
== Tab A
Content in Tab A
== Tab B
Content in Tab B
:::
```

**渲染效果：**

:::tabs
== Tab A
Content in Tab A
== Tab B
Content in Tab B
:::

:::tabs
== Tab A
Content in Tab A
== Tab B
Content in Tab B
:::

### 共享选择状态标签页

具有共享选择状态的标签页：

```Markdown
:::tabs key:shared-selection-state
== Tab A
Content in Tab A
== Tab B
Content in Tab B
:::

:::tabs key:shared-selection-state
== Tab A
Content in Tab A
== Tab B
Content in Tab B
:::
```

**渲染效果：**

:::tabs key:shared-selection-state
== Tab A
Content in Tab A
== Tab B
Content in Tab B
:::

:::tabs key:shared-selection-state
== Tab A
Content in Tab A
== Tab B
Content in Tab B
:::

## 拼音

可以使用 `<PinYin>` 标签在指定文本内容的上方加注拼音，也可以加注其他内容。

```Markdown
拼音可以加注在<PinYin>字</PinYin>或<PinYin>词语</PinYin>的上方。
```

**渲染效果：**

拼音可以加注在<PinYin>字</PinYin>或<PinYin>词语</PinYin>的上方。

也可以使用 `manual` 属性（简写为 `m`）在指定文本内容的上方加注其他内容。如为日语中的汉字加注读音：

```Markdown
<PinYin m="つき">月</PinYin>が<PinYin m="きれい">綺麗</PinYin>ですね。
```

**渲染效果：**

<PinYin m="つき">月</PinYin>が<PinYin m="きれい">綺麗</PinYin>ですね。

::: warning
`<PinYin>` 标签在编译时会转换为 HTML `<ruby>` 标签（[MDN Docs](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ruby)）。这是 HTML5 引入的新规范，在不支持的浏览器上会降级到括号加注的形式。

自动拼音加注通过 [pinyin.js](https://pinyin.js.org) 实现，并采用 `Intl.Segmenter` 分词来处理多音字，不能保证拼音加注 100% 准确。
:::
