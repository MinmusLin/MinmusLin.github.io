import {defineConfig} from 'vitepress'
import {figure} from '@mdit/plugin-figure'
import {MermaidMarkdown, MermaidPlugin} from 'vitepress-plugin-mermaid'
import {groupIconMdPlugin, groupIconVitePlugin} from 'vitepress-plugin-group-icons'
import {tabsMarkdownPlugin} from 'vitepress-plugin-tabs'
import vitepressProtectPlugin from 'vitepress-protect-plugin'
import markdownItAbbr from 'markdown-it-abbr'
import markdownItDeflist from 'markdown-it-deflist'
import markdownItFootnote from 'markdown-it-footnote'
import markdownItIns from 'markdown-it-ins'
import markdownItMark from 'markdown-it-mark'
import markdownItSpoiler from '@traptitech/markdown-it-spoiler'
import markdownItSub from 'markdown-it-sub'
import markdownItSup from 'markdown-it-sup'
import markdownItTaskCheckbox from 'markdown-it-task-checkbox'
import markdownTimeline from 'vitepress-markdown-timeline'
import {nav, sidebar} from './configs'

export default defineConfig({
  title: "MinmusLin's Blog",
  description: "MinmusLin's Blog | Code, Bugs & Sudden Enlightenment | 记录代码、Bug 与偶尔的灵光一现",
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/css/all.min.css'
    }]
  ],
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    logo: '/favicon.ico',
    nav,
    sidebar,
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
    lineNumbers: true,
    config: (md) => {
      md.use(figure)
      md.use(MermaidMarkdown)
      md.use(groupIconMdPlugin)
      md.use(tabsMarkdownPlugin)
      md.use(markdownItAbbr)
      md.use(markdownItDeflist)
      md.use(markdownItFootnote)
      md.use(markdownItIns)
      md.use(markdownItMark)
      md.use(markdownItSpoiler)
      md.use(markdownItSub)
      md.use(markdownItSup)
      md.use(markdownItTaskCheckbox)
      md.use(markdownTimeline)
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
      groupIconVitePlugin({
        customIcon: {
          '.c': 'vscode-icons:file-type-c',
          '.cpp': 'vscode-icons:file-type-cpp',
          '.java': 'vscode-icons:file-type-java',
          '.go': 'vscode-icons:file-type-go'
        }
      }),
      vitepressProtectPlugin({
        disableF12: true,
        disableCopy: false,
        disableSelect: false
      })
    ],
    optimizeDeps: {
      include: ['mermaid'],
      exclude: ['@nolebase/vitepress-plugin-enhanced-readabilities/client', 'vitepress', '@nolebase/ui']
    },
    ssr: {
      noExternal: ['mermaid', '@nolebase/vitepress-plugin-highlight-targeted-heading', '@nolebase/vitepress-plugin-enhanced-readabilities', '@nolebase/ui']
    }
  },
  sitemap: {
    hostname: 'https://www.minmuslin.cn'
  }
})
