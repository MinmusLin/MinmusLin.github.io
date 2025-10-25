import type {DefaultTheme} from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
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
]

export const breadcrumbTitle: Record<string, string> = {
  '/distribution': '分布式技术',
  '/guide': '贡献者指南'
}
