<template>
  <div ref="el" class="min-h-screen text-gray-800 bg-primary-50">
    <includes-header />
    <div class="h-[70px] bg-white max-w-bootstrap mx-auto"></div>
    <div
        id="default-body"
        class="shadow-default max-w-bootstrap mx-auto px-5 bg-white min-h-[calc(100vh-70px)]"
    >
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts" setup>

const el = ref()

const { height } = useWindowSize()
watch(height, (val) => {
  if(process.client) {
    // set --vh
    document.documentElement.style.setProperty('--vh', val / 100 + 'px')
  }
}, { immediate: true })

const minHeight = computed(() => `calc(var(--vh, 1vh) * 100 - 70px)`)
</script>

<style>
#default-body {
  min-height: v-bind(minHeight);
}
</style>
