<template>
  <div ref='plotContainer' class='function-plot-container'/>
</template>

<script setup lang='ts'>
import {ref, onMounted, watch, type PropType} from 'vue'
import FunctionPlot, {FunctionPlotOptions} from 'function-plot'

const plotContainer = ref<HTMLDivElement | null>(null)
const props = defineProps({
  options: {
    type: Object as PropType<FunctionPlotOptions>,
    required: true
  }
})

const plotFunction = () => {
  if (!plotContainer.value) {
    return
  }
  try {
    plotContainer.value.innerHTML = ''
    FunctionPlot({...props.options, target: plotContainer.value})
  } catch (error) {
    console.error('Function plot error:', error)
  }
}

onMounted(plotFunction)
watch(() => props.options, plotFunction, {deep: true})
</script>

<style scoped>
.function-plot-container {
  color: black;
  user-select: none;
}

.dark .function-plot-container {
  filter: invert(100%) hue-rotate(210deg);
}
</style>
