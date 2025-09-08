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
    window.location.href = 'https://www.larkoffice.com/invitation/page/add_contact/?token=154v9ded-7060-4f8d-a18c-1ca756b04766'
  }
})
</script>
