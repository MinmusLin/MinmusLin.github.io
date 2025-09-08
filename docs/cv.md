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
    window.location.href = 'cv/cv.pdf'
  }
})
</script>
