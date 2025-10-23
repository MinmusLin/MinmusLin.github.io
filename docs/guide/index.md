---
next:
  text: '简介'
  link: '/guide/vitepress-introduction'
---

# 贡献者指南

本部分旨在为项目贡献者提供相关的技术参考与开发指南，涵盖 VitePress 简介、构建与部署流程，以及 Markdown 语法规范与内容撰写标准。

## 技术栈

本博客基于以下现代化前端技术栈构建：

1. [VitePress](https://vitepress.dev/zh)<br>基于 Vite 与 Vue.js 的高性能静态站点生成器，提供极速的热更新与构建体验，支持使用 Vue 组件进行深度定制。

2. [Vue3.js](https://cn.vuejs.org)<br>渐进式 JavaScript 框架，具有响应式数据绑定与组件化开发能力，兼顾灵活性与高性能。

3. [Vite](https://cn.vitejs.dev)<br>前端构建工具，提供快速的开发服务器启动与优化的生产构建，支持丰富的插件生态。

4. [Node.js](https://nodejs.org/zh-cn)<br>跨平台 JavaScript 运行时环境，用于构建服务端应用、命令行工具及脚本处理。

## 构建与部署

项目采用 [Git](https://git-scm.com) 进行版本控制，通过 [GitHub Actions](https://docs.github.com/zh/actions) 实现持续集成与自动化部署，最终发布至 [GitHub Pages](https://docs.github.com/zh/pages)。

## 贡献者

<div style="display: flex; justify-content: center">
  <VPTeamMembers size="medium" :members="members"/>
</div>

<script setup>
import {VPTeamMembers} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/MinmusLin.png',
    name: 'Jishen Lin',
    title: 'Author',
    links: [
      {
        icon: 'wechat',
        link: '/contact/wechat'
      },
      {
        icon: 'qq',
        link: '/contact/qq'
      },
      {
        icon: 'xiaohongshu',
        link: '/contact/xiaohongshu'
      },
      {
        icon: 'github',
        link: 'https://github.com/MinmusLin'
      }
    ]
  }
]
</script>
