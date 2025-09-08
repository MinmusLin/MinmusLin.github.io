---
layout: page
---

<br>
<p style="text-align: center">Redirecting...</p>
<br>

<script setup>
import {onMounted} from 'vue'
import {inBrowser} from 'vitepress'

onMounted(() => {
  if (inBrowser) {
    window.location.href = 'https://www.xiaohongshu.com/user/profile/63e0dc710000000026012b11'
  }
})
</script>
