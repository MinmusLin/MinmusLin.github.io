import {defineConfig} from 'vitepress'
import {figure} from '@mdit/plugin-figure'
import {MermaidMarkdown, MermaidPlugin} from 'vitepress-plugin-mermaid'
import vitepressProtectPlugin from 'vitepress-protect-plugin'
import markdownItAbbr from 'markdown-it-abbr'
import markdownItDeflist from 'markdown-it-deflist'
import markdownItFootnote from 'markdown-it-footnote'
import markdownItIns from 'markdown-it-ins'
import markdownItMark from 'markdown-it-mark'
import markdownItSub from 'markdown-it-sub'
import markdownItSup from 'markdown-it-sup'
import markdownItTaskCheckbox from 'markdown-it-task-checkbox'

export default defineConfig({
  title: "MinmusLin's Blog",
  description: "MinmusLin's Blog | Code, Bugs & Sudden Enlightenment | 记录代码、Bug 与偶尔的灵光一现",
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}]
  ],
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/favicon.ico',
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
            link: '/distribution'
          }
        ]
      },
      {
        text: '随笔',
        link: '/essay'
      },
      {
        text: '指南',
        link: '/guide'
      }
    ],
    sidebar: {
      '/distribution': [
        {
          text: '分布式概述',
          link: '/distribution'
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
        }
      ],
      '/essay': [
        {
          text: '我的随笔',
          link: '/essay'
        },
        {
          text: '2025-05-07｜从放弃保研到字节暑期实习上岸：聊聊同济软件工程科班三年带给我了什么',
          link: '/essay/2025-05-07'
        }
      ],
      '/guide': [
        {
          text: '贡献者指南',
          link: '/guide'
        },
        {
          text: 'VitePress',
          collapsed: false,
          items: [
            {
              text: '简介',
              link: '/guide/vitepress-introduction'
            },
            {
              text: '构建与部署',
              link: '/guide/vitepress-build-and-deploy'
            }
          ]
        },
        {
          text: 'Markdown 写作',
          collapsed: false,
          items: [
            {
              text: '基本语法',
              link: '/guide/markdown-basic-syntax'
            },
            {
              text: '扩展语法',
              link: '/guide/markdown-extended-syntax'
            },
            {
              text: '高级技巧',
              link: '/guide/markdown-advanced-techniques'
            }
          ]
        }
      ]
    },
    outline: {
      level: [2, 4],
      label: '目录'
    },
    socialLinks: [
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
    ],
    footer: {
      message: 'Released under the <a href="https://creativecommons.org/licenses/by-nc-sa/4.0" target="_blank" rel="noopener noreferrer">Attribution-NonCommercial-ShareAlike 4.0 International</a>',
      copyright: 'Copyright © 2025-Present <a href="mailto:minmuslin@outlook.com" target="_blank" rel="noopener noreferrer">Jishen Lin</a>'
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
    notFound: {
      quote: '您访问的页面不存在或已被移除',
      linkText: '返回首页',
      linkLabel: '返回首页'
    },
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
    math: true,
    config: (md) => {
      md.use(figure)
      md.use(MermaidMarkdown)
      md.use(markdownItAbbr)
      md.use(markdownItDeflist)
      md.use(markdownItFootnote)
      md.use(markdownItIns)
      md.use(markdownItMark)
      md.use(markdownItSub)
      md.use(markdownItSup)
      md.use(markdownItTaskCheckbox)
    },
    image: {
      lazyLoading: true
    },
    container: {
      infoLabel: '信息',
      noteLabel: '备注',
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      detailsLabel: '详细信息',
      importantLabel: '重要',
      cautionLabel: '注意'
    }
  },
  vite: {
    plugins: [
      MermaidPlugin(),
      vitepressProtectPlugin({
        disableF12: true,
        disableCopy: false,
        disableSelect: false
      })
    ],
    optimizeDeps: {
      include: ['mermaid']
    },
    ssr: {
      noExternal: ['mermaid']
    }
  }
})
