<template>
  <div ref="el" class="min-h-screen text-gray-800 bg-primary-50">
    <includes-header />
    <div class="h-[70px] bg-white max-w-bootstrap mx-auto"></div>
    <div class="shadow-default max-w-bootstrap mx-auto px-5 bg-white min-h-[calc(100vh-70px)]">
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts" setup>

const el = ref()

const { height } = useWindowSize()
const windowHeight = useCssVar('--window-height', el, { initialValue: '100vh' })

watch(height, (val) => {
  windowHeight.value = val + 'px'
})
</script>

<style scoped></style>
