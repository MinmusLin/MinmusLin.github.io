import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import {Underline} from '@theojs/lumen'
import {onMounted, watch, nextTick} from 'vue'
import {useData, useRoute, inBrowser} from 'vitepress'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import mediumZoom from 'medium-zoom'
import {NProgress} from 'nprogress-v2/dist/index.js'
import busuanzi from 'busuanzi.pure.js'
import 'nprogress-v2/dist/index.css'
import '@theojs/lumen/pic'
import './custom.css'

// noinspection JSUnusedGlobalSymbols
export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp: ({app, router}) => {
    app.component('Underline', Underline)
    if (inBrowser) {
      router.beforeEach((to, from, next) => {
        switch (to.path) {
          case '/contact/qq':
            next('/contact/qq-qrcode.jpg')
            break
          case '/contact/wechat':
            next('/contact/wechat-qrcode.jpg')
            break
          case '/contact/xiaohongshu':
            window.location.href = 'https://www.xiaohongshu.com/user/profile/63e0dc710000000026012b11'
            break
          default:
            next()
        }
      })
      NProgress.configure({showSpinner: false})
      router.onBeforeRouteChange = () => {
        NProgress.start()
      }
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
        NProgress.done()
      }
    }
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('.main img', {background: 'var(--vp-c-bg)'})
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
    const {frontmatter} = useData()
    giscusTalk({
        repo: 'MinmusLin/MinmusLin.github.io',
        repoId: 'R_kgDOOgDDUw',
        category: 'General',
        categoryId: 'DIC_kwDOOgDDU84CukN6',
        mapping: 'pathname',
        strict: '0',
        reactionsEnabled: '1',
        emitMetadata: '0',
        inputPosition: 'bottom',
        theme: 'preferred_color_scheme',
        lang: 'zh-CN',
        loading: 'lazy'
      },
      {
        frontmatter, route
      },
      true
    )
  }
}
