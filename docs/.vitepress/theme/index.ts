import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import {Underline} from '@theojs/lumen'
import './custom.css'
import '@theojs/lumen/pic'

// noinspection JSUnusedGlobalSymbols
export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp: ({app}) => {
    app.component('Underline', Underline)
  }
}
