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
    window.location.href = 'https://www.larkoffice.com/invitation/page/add_contact/?token=154v9ded-7060-4f8d-a18c-1ca756b04766'
  }
})
</script>
