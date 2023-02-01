<template>
  <div class="max-w-bootstrap mx-auto flex px-4 lg:px-0">

    <home-info
        :class="[largerThanMd ? 'w-1/2' : 'w-full']"
        :style="cutsomStyle"
    />

    <home-avatar v-if="largerThanMd" class="w-1/2" />

  </div>
</template>

<script lang="ts" setup>
import {breakpointsTailwind} from "@vueuse/core";
import {CSSProperties} from "@vue/runtime-dom";

const breakpoints = useBreakpoints({
  ...breakpointsTailwind,
  ct: '500px'
})
const largerThanMd = breakpoints.greater('md')

const isCenterLayout = breakpoints.between('ct', 'md')
const cutsomStyle = computed<CSSProperties>(() => {

  if(!isCenterLayout) {
    return {}
  }
  return {
    maxWidth: '500px',
    margin: '0 auto'
  }

})
</script>

<style scoped></style>
