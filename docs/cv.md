---
layout: page
title: Redirecting...
navbar: false
sidebar: false
aside: false
footer: false
---

<div style="display: flex; justify-content: center; align-items: center; height: 100vh">
  <div style="text-align: center">
    <p>Redirecting...</p>
  </div>
</div>

<script setup>
import {onMounted} from 'vue'
import {inBrowser} from 'vitepress'

onMounted(() => {
  if (inBrowser) {
    window.location.href = 'cv.pdf'
  }
})
</script>
