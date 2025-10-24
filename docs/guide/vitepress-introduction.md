# VitePress 简介

<ArticleMetadata/>

VitePress 是一个[静态站点生成器](https://en.wikipedia.org/wiki/Static_site_generator)（SSG），专为构建快速、以内容为中心的站点而设计。简而言之，VitePress 获取用 Markdown 编写的内容，对其应用主题，并生成可以轻松部署到任何地方的静态 HTML 页面。

## 使用场景

* **文档**：VitePress 附带一个专为技术文档设计的默认主题。你现在正在阅读的这个页面以及 [Vite](https://vitejs.dev)、[Rollup](https://rollupjs.org)、[Pinia](https://pinia.vuejs.org)、[VueUse](https://vueuse.org)、[Vitest](https://vitest.dev)、[D3](https://d3js.org)、[UnoCSS](https://unocss.dev)、[Iconify](https://iconify.design) [等](https://github.com/search?q=/"vitepress":+/+language:json&type=code)文档都是基于这个主题的。

* **博客、档案和营销网站**：VitePress 支持[完全的自定义主题](https://vitepress.dev/zh/guide/custom-theme)，具有标准 Vite + Vue 应用程序的开发体验。基于 Vite 构建还意味着可以直接利用其生态系统中丰富的 Vite 插件。此外，VitePress 提供了灵活的 API 来[加载数据](https://vitepress.dev/zh/guide/data-loading)（本地或远程），也可以[动态生成路由](https://vitepress.dev/zh/guide/routing#dynamic-routes)。只要可以在构建时确定数据，就可以使用它来构建几乎任何东西。

## 开发体验

VitePress 旨在使用 Markdown 生成内容时提供出色的开发体验。

* **Vite 驱动**：即时服务器启动，始终立即反映（<100ms）编辑变化，无需重新加载页面。

* **内置 Markdown 扩展**：VitePress 提供了许多用于处理代码块的高级功能，使其真正成为技术文档的理想选择。

* **Vue 增强的 Markdown**：每个 Markdown 页面都是 Vue 单文件组件，这要归功于 Vue 模板与 HTML 的 100% 语法兼容性。可以使用 Vue 模板语法或导入的 Vue 组件在静态内容中嵌入交互性。

## 性能

与许多传统的 SSG 不同，每次导航都会导致页面完全重新加载，VitePress 生成的网站在初次访问时提供静态 HTML，但它变成了[单页应用程序](https://en.wikipedia.org/wiki/Single-page_application)（SPA）进行站点内的后续导航。

* **快速的初始加载**：对任何页面的初次访问都将会是静态的、预呈现的 HTML，以实现极快的加载速度和最佳的 SEO。然后页面加载一个 JavaScript bundle，将页面变成 Vue SPA（这被称为“激活”）。与 SPA 激活缓慢的常见假设不同，由于 Vue 3 良好的原始性能和编译优化，这个过程实际上非常快。在 [PageSpeed Insights](https://pagespeed.web.dev/report?url=https%3A%2F%2Fvitepress.dev%2F) 上，典型的 VitePress 站点即使在网络速度较慢的低端移动设备上也能获得近乎完美的性能分数。

* **加载完成后可以快速切换**：更重要的是，SPA 模型在首次加载后能够提升用户体验。用户在站点内导航时，不会再触发整个页面的刷新。而是通过获取并动态更新页面的内容来实现切换。VitePress 还会自动预加载视口范围内链接对应的页面片段。这样一来，大部分情况下，用户在加载完成后就能立即浏览新页面。

* **高效的交互**：为了能够嵌入静态 Markdown 中的动态 Vue 部分，每个 Markdown 页面都被处理为 Vue 组件并编译成 JavaScript。这听起来可能效率低下，但 Vue 编译器足够聪明，可以将静态和动态部分分开，从而最大限度地减少激活成本和有效负载大小。对于初始的页面加载，静态部分会自动从 JavaScript 有效负载中删除，并在激活期间跳过。
