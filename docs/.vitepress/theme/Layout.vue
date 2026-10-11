<template>
  <Layout>
    <template #doc-before>
      <Breadcrumb/>
    </template>
    <template #layout-top>
      <NolebaseHighlightTargetedHeading/>
    </template>
    <template #nav-bar-content-after>
      <NolebaseEnhancedReadabilitiesMenu/>
    </template>
    <template #nav-screen-content-after>
      <NolebaseEnhancedReadabilitiesScreenMenu/>
    </template>
  </Layout>
</template>

<script setup lang='ts'>
import {useData} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import {nextTick, provide} from 'vue'
import Breadcrumb from './components/Breadcrumb.vue'
import {NolebaseHighlightTargetedHeading} from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'
import {NolebaseEnhancedReadabilitiesMenu, NolebaseEnhancedReadabilitiesScreenMenu} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

const {isDark} = useData()

const enableTransitions = () => 'startViewTransition' in document && window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', ({clientX: x, clientY: y}: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }
  document.documentElement.style.setProperty('--switch-x', `${x}px`)
  document.documentElement.style.setProperty('--switch-y', `${y}px`)
  document.documentElement.style.setProperty('--switch-radius', `${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px`)
  document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })
})

const {Layout} = DefaultTheme
</script>

<style>
:root {
  --vp-nolebase-highlight-targeted-heading-bg: var(--vp-c-yellow-soft);
}

::view-transition-old(root), ::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root) {
  z-index: 1;
}

::view-transition-new(root) {
  z-index: 9999;
  animation: switch-appearance 300ms ease-in both;
}

@keyframes switch-appearance {
  from {
    clip-path: circle(0 at var(--switch-x) var(--switch-y));
  }
  to {
    clip-path: circle(var(--switch-radius) at var(--switch-x) var(--switch-y));
  }
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>
