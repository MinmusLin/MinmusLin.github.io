<template>
  <div class='baseline-status custom-block' :class='status'>
    <div class='feature-name'>
      Baseline status of <code>{{ featureNameStr }}</code>
    </div>
    <hr/>
    <details class='baseline-card'>
      <summary class='baseline-summary'>
        <div class='baseline-title'>
          <BaselineIcon :status='status'/>
          <span class='baseline-title-text'>
            <span v-if="status == 'newly' || status == 'widely'">Baseline&nbsp;</span>
            <span class='baseline-title-info'>{{ baselineInfoStr }}</span>
          </span>
          <span v-if="status == 'newly'" class='newly-available'>
            Newly available
          </span>
        </div>
        <div class='browsers' v-if="status != 'unknown'">
          <span class='engine'>
            <span class='browser chrome' :class='brwsrCompat.chrome'/>
            <span class='browser edge' :class='brwsrCompat.edge'/>
          </span>
          <span class='engine'>
            <span class='browser firefox' :class='brwsrCompat.firefox'/>
          </span>
          <span class='engine'>
            <span class='browser safari' :class='brwsrCompat.safari'/>
          </span>
        </div>
      </summary>
      <div class='extra'>
        <p v-if="status == 'widely'">
          This feature is well established and works across many devices and browser versions. It’s been available across browsers since <strong>{{ lowDateStr }}</strong>.
        </p>
        <p v-if="status == 'newly'">
          Since <strong>{{ lowDateStr }}</strong>, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
        </p>
        <p v-if="status == 'limited'">
          This feature is not Baseline untill {{ lowDateStr }} because it does not work in some of the most widely-used browsers.
        </p>
        <p v-if="status == 'unknown'">
          Could not fetch information about this feature. Try searching on <a class='animated-link' href='https://caniuse.com' target='_blank'>Can I Use</a> or <a class='animated-link' href='https://caniuse.com' target='_blank'>MDN Web Docs</a> for more information.
        </p>
        <p class='links'>
          <a class='vp-external-link-icon animated-link' href='https://developer.mozilla.org/zh-CN/docs/Glossary/Baseline/Compatibility' target='_blank'>Learn More</a>
          <a class='vp-external-link-icon animated-link' :href="'https://webstatus.dev/features/' + props.feature" target='_blank'>See full compatibility</a>
        </p>
      </div>
    </details>
  </div>
</template>

<script setup lang='ts'>
import {onMounted, reactive, ref} from 'vue'
import axios from 'axios'
import BaselineIcon from './BaselineIcon.vue'

const props = defineProps<{feature: string}>()
const status = ref<'widely' | 'newly' | 'limited' | 'unknown'>('unknown')
const featureNameStr = ref(props.feature)
const baselineInfoStr = ref('Fetching baseline info...')
const lowDateStr = ref('')
const toCheckCross = (status: any) => (status ? 'checked' : 'cross')
const brwsrCompat = reactive<{
  chrome: 'checked' | 'cross'
  edge: 'checked' | 'cross'
  firefox: 'checked' | 'cross'
  safari: 'checked' | 'cross'
}>({
  chrome: 'cross',
  edge: 'cross',
  firefox: 'cross',
  safari: 'cross'
})

interface APIreturn {
  baseline: {
    low_date?: string
    status: 'widely' | 'newly' | 'limited'
  }
  browser_implementations: {
    chrome?: {
      date: string
      version: string
      status: 'available'
    }
    edge?: {
      date: string
      version: string
      status: 'available'
    }
    firefox?: {
      date: string
      version: string
      status: 'available'
    }
    safari?: {
      date: string
      version: string
      status: 'available'
    }
  }
  feature_id: string
  name: string
}

onMounted(() => {
  axios.get('https://api.webstatus.dev/v1/features/' + props.feature).then((response) => {
      const data: APIreturn = response.data
      featureNameStr.value = data.name
      status.value = data.baseline.status;
      [
        brwsrCompat.chrome,
        brwsrCompat.edge,
        brwsrCompat.firefox,
        brwsrCompat.safari
      ] = [
        data.browser_implementations.chrome,
        data.browser_implementations.edge,
        data.browser_implementations.firefox,
        data.browser_implementations.safari
      ].map(toCheckCross)

      switch (data.baseline.status) {
        case 'widely': {
          const lowDate = new Date(data.baseline.low_date!)
          baselineInfoStr.value = 'Widely available'
          lowDateStr.value = lowDate.toLocaleString('en-US', {month: 'long', year: 'numeric'})
          break
        }
        case 'newly': {
          const lowDate = new Date(data.baseline.low_date!)
          baselineInfoStr.value = lowDate.getFullYear().toString()
          lowDateStr.value = lowDate.toLocaleString('en-US', {month: 'long', year: 'numeric'})
          break
        }
        case 'limited': {
          baselineInfoStr.value = 'Limited availability'
          lowDateStr.value = new Date().toLocaleString('en-US', {month: 'long', year: 'numeric'})
          break
        }
      }
    }).catch((err) => {
      console.log('Availability not found: ', props.feature)
      baselineInfoStr.value = 'Availability not found'
    })
})
</script>

<style>
.baseline-status {
  background-color: var(--baseline-soft);
  padding: 0 1.2rem;
  color: var(--vp-c-text);
  font-size: 1rem;
}

.baseline-summary::before {
  color: var(--baseline-color);
}

.baseline-status .feature-name {
  margin: 10px 0 -2px 0;
}

.baseline-status .feature-name + hr {
  margin: 10px -1.2rem;
}

.baseline-status .feature-name code {
  padding: 0;
  background: none;
  color: inherit;
  font-weight: bold;
  font-size: 1em;
}

.baseline-card {
  margin: 14px 0 !important;
}

.baseline-card p {
  margin: 10px 0 !important;
}

.baseline-summary {
  margin: 8px 0 0 0 !important;
  padding-left: 46px;
  padding-right: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 1.1em;
  cursor: pointer;
}

.baseline-summary::before {
  right: 0;
  left: unset;
  transform: rotate(90deg);
}

.baseline-card[open] .baseline-summary::before {
  transform: rotate(-90deg);
}

.BaselineIcon {
  margin-left: -46px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.baseline-title {
  display: flex;
  font-weight: bold;
  align-items: center;
  margin-right: 15px;
}

.baseline-title-info {
  font-weight: normal;
}

.newly-available {
  background-color: var(--baseline-accent);
  color: white;
  padding: 0.75em 0.4em;
  border-radius: 2px;
  font-size: 0.7em;
  line-height: 0;
  text-transform: uppercase;
  margin-left: 0.6em;
  white-space: nowrap;
}

.baseline-card .browsers {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.4em;
}

.baseline-card .engine {
  background: var(--vp-c-bg);
  padding: 0.5em 0.625em;
  border-radius: 2em;
  font-size: 20px;
  display: flex;
  gap: 0.4em;
}

.baseline-card .browser {
  width: 1.8em;
  height: 1em;
  display: inline-block;
  position: relative;
}

.baseline-card .browser::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 1em;
  height: 1em;
  background-size: contain;
  background-repeat: no-repeat;
}

.baseline-card .browser.chrome::before {
  background-image: url(./assets/chrome.svg);
}

.baseline-card .browser.edge::before {
  background-image: url(./assets/edge.svg);
}

.baseline-card .browser.firefox::before {
  background-image: url(./assets/firefox.svg);
}

.baseline-card .browser.safari::before {
  background-image: url(./assets/safari.svg);
}

.baseline-card .browser::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 0.8em;
  height: 1em;
}

.baseline-card .browser.checked::after {
  background: var(--widely-f);
  mask: url(./assets/check.svg) no-repeat;
  -webkit-mask: url(./assets/check.svg) no-repeat;
}

.newly .baseline-card .browser.checked::after {
  background: var(--newly-f);
}

.baseline-card .browser.cross::after {
  background: var(--limited-f);
  mask: url(./assets/cross.svg) no-repeat;
  -webkit-mask: url(./assets/cross.svg) no-repeat;
}

.baseline-card .links {
  padding-bottom: 2px;
}

.baseline-card a {
  --link-color: var(--baseline-color);
  --link-soft: var(--baseline-soft);
  color: var(--baseline-color);
}

.baseline-status {
  --limited-f: #F09409;
  --limited-b: #C6C6C6;
  --widely-f: #1EA446;
  --widely-b: #C4EED0;
  --newly-f: #1B6EF3;
  --newly-b: #A8C7FA;
  --unknown: #909090;
}

.dark .baseline-status {
  --limited-f: #F09409;
  --limited-b: #565656;
  --widely-f: #1EA446;
  --widely-b: #125225;
  --newly-f: #4185FF;
  --newly-b: #2D509E;
  --unknown: #666666;
}

.baseline-status.newly {
  --baseline-color: var(--ln-c-blue);
  --baseline-accent: #3367D6;
  --baseline-soft: #1178FF22;
}

.baseline-status.widely {
  --baseline-color: var(--ln-c-green);
  --baseline-accent: #1E8E3E;
  --baseline-soft: #00C60A1C;
}

.baseline-status.limited {
  --baseline-color: var(--ln-c-yellow);
  --baseline-accent: #EA8600;
  --baseline-soft: #F094091E;
}

.baseline-status.unknown {
  --baseline-color: var(--ln-c-gray);
  --baseline-accent: var(--ln-c-gray);
  --baseline-soft: var(--ln-c-gray-soft);
}
</style>
