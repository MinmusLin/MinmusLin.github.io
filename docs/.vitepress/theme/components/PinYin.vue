<template>
  <ruby ref='textEle'>
    <slot/>
    <rp>(</rp>
    <rt>{{ display }}</rt>
    <rp>)</rp>
  </ruby>
</template>

<script setup lang='ts'>
import {onMounted, ref} from 'vue'
import pinyin from 'pinyin'

const display = ref('')
const textEle = ref<HTMLSpanElement | null>(null)
const props = defineProps<{ manual?: string, m?: string }>()

onMounted(() => {
  if (!textEle.value) {
    return
  }
  display.value = props.manual ?? props.m ?? pinyin(textEle.value.innerText, {
    heteronym: true,
    segment: true
  }).flat().join(' ')
})
</script>

<style>
ruby rp, ruby rt {
  font-size: 0.7em;
  user-select: none;
}
</style>
