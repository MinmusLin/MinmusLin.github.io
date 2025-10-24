import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import {Underline} from '@theojs/lumen'
import {onMounted, watch, nextTick} from 'vue'
import {useData, useRoute, inBrowser} from 'vitepress'
import Confetti from './components/Confetti.vue'
import PinYin from './components/PinYin.vue'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import {enhanceAppWithTabs} from 'vitepress-plugin-tabs/client'
import {NProgress} from 'nprogress-v2/dist/index.js'
import busuanzi from 'busuanzi.pure.js'
import mediumZoom from 'medium-zoom'
import 'nprogress-v2/dist/index.css'
import '@theojs/lumen/pic'
import './style.css'
import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp: ({app, router}) => {
    enhanceAppWithTabs(app)
    app.component('Confetti', Confetti)
    app.component('PinYin', PinYin)
    app.component('Underline', Underline)
    if (inBrowser) {
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
    const {frontmatter} = useData()
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
