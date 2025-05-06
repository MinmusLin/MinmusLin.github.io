import {defineConfig} from 'vitepress'

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  title: 'MinmusLin\'s Blog',
  description: "Stack Trace | MinmusLin's Blog | 记录代码、Bug 与偶尔的灵光一现",
  head: [['link', {rel: 'icon', href: '/favicon.ico'}]],
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '技术',
        items: [
          {
            text: '分布式',
            link: '/distribution/'
          }
        ]
      }
    ],
    sidebar: {
      '/distribution/': [
        {
          text: '分布式概述',
          link: '/distribution/'
        },
        {
          text: '分布式理论',
          collapsed: false,
          items: [
            {
              text: 'CAP 理论',
              link: '/distribution/cap-theory'
            },
            {
              text: 'BASE 理论',
              link: '/distribution/base-theory'
            }
          ]
        },
        {
          text: '分布式算法',
          collapsed: false,
          items: [
            {
              text: 'Paxos 算法',
              link: '/distribution/paxos-algorithm'
            },
            {
              text: 'Raft 算法',
              link: '/distribution/raft-algorithm'
            }
          ]
        },
        {
          text: '分布式 ID',
          collapsed: false,
          items: [
            {
              text: '分布式 ID 实现',
              link: '/distribution/distributed-id-solutions'
            },
            {
              text: '分布式 ID 场景',
              link: '/distribution/distributed-id-scenarios'
            }
          ]
        }
      ]
    },
    outline: {
      level: [2, 4],
      label: '目录'
    },
    socialLinks: [{
      icon: 'github',
      link: 'https://github.com/MinmusLin/MinmusLin.github.io'
    }],
    footer: {
      message: 'Released under the <a href="https://github.com/MinmusLin/MinmusLin.github.io/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">MIT License</a>.',
      copyright: 'Copyright © 2025-Present <a href="https://github.com/MinmusLin" target="_blank" rel="noopener noreferrer">Jishen Lin</a>'
    },
    editLink: {
      pattern: 'https://github.com/MinmusLin/MinmusLin.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    docFooter: {
      prev: '上一篇文章',
      next: '下一篇文章'
    },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色主题',
    darkModeSwitchTitle: '切换到深色主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '切换语言',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档'
          },
          modal: {
            displayDetails: '展开搜索详情',
            resetButtonTitle: '清除搜索条件',
            backButtonTitle: '返回上一级',
            noResultsText: '未搜索到相关结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    }
  },
  markdown: {
    math: true
  }
})
