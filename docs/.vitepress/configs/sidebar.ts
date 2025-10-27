import type {DefaultTheme} from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/distribution': [
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
    }
  ],
  '/essay': [
    {
      text: '我的随笔',
      link: '/essay/'
    },
    {
      text: '2025-05-07｜从放弃保研到字节暑期实习上岸：聊聊同济软件工程科班三年带给我了什么',
      link: '/essay/2025-05-07'
    }
  ],
  '/guide': [
    {
      text: '贡献者指南',
      link: '/guide/'
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
        },
        {
          text: 'VitePress 扩展',
          link: '/guide/vitepress-markdown-extension'
        },
        {
          text: '函数图像扩展',
          link: '/guide/function-plot-extension'
        }
      ]
    }
  ]
}
