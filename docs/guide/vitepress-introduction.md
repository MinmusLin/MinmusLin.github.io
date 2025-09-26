# VitePress 简介

VitePress 是一个[静态站点生成器](https://en.wikipedia.org/wiki/Static_site_generator)（SSG），专为构建快速、以内容为中心的站点而设计。简而言之，VitePress 获取用 Markdown 编写的内容，对其应用主题，并生成可以轻松部署到任何地方的静态 HTML 页面。

## 使用场景

* **文档**：VitePress 附带一个专为技术文档设计的默认主题。你现在正在阅读的这个页面以及 [Vite](https://vitejs.dev)、[Rollup](https://rollupjs.org)、[Pinia](https://pinia.vuejs.org)、[VueUse](https://vueuse.org)、[Vitest](https://vitest.dev)、[D3](https://d3js.org)、[UnoCSS](https://unocss.dev)、[Iconify](https://iconify.design) [等](https://github.com/search?q=/"vitepress":+/+language:json&type=code)文档都是基于这个主题的。

* **博客、档案和营销网站**：VitePress 支持[完全的自定义主题](https://vitepress.dev/zh/guide/custom-theme)，具有标准 Vite + Vue 应用程序的开发体验。基于 Vite 构建还意味着可以直接利用其生态系统中丰富的 Vite 插件。此外，VitePress 提供了灵活的 API 来[加载数据](https://vitepress.dev/zh/guide/data-loading)（本地或远程），也可以[动态生成路由](https://vitepress.dev/zh/guide/routing#dynamic-routes)。只要可以在构建时确定数据，就可以使用它来构建几乎任何东西。

## 开发体验

VitePress 旨在使用 Markdown 生成内容时提供出色的开发体验。

## 性能

与许多传统的 SSG 不同，每次导航都会导致页面完全重新加载，VitePress 生成的网站在初次访问时提供静态 HTML，但它变成了[单页应用程序](https://en.wikipedia.org/wiki/Single-page_application)（SPA）进行站点内的后续导航。
