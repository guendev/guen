<template>
  <div ref="el" class="min-h-[calc(var(--vh,1vh)*100)] text-gray-800 bg-primary-50">
    <includes-header />
    <div class="h-[70px] bg-white max-w-bootstrap mx-auto"></div>
    <div class="shadow-default max-w-bootstrap mx-auto px-5 bg-white min-h-[calc(var(--vh,1vh)*100-70px)]">
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts" setup>

const el = ref()

const { height } = useWindowSize()
watch(height, (val) => {
  if(process.client) {

    const _val = val ? (val / 100 + 'px') : '1vh'
    // set --vh
    document.documentElement.style.setProperty('--vh', _val)
  }
}, { immediate: true })
</script>

<style></style>
