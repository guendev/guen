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

const isClient = ref(false)
onMounted(() => nextTick(() => {
  document?.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`)
  isClient.value = true
}))

const el = ref()
const { height } = useWindowSize()
const debouncedFn = useDebounceFn(() => {
  if(isClient) {

    const _val = height.value ? (height.value / 100 + 'px') : '1vh'
    // set --vh
    // ssr: context without document
    document?.documentElement.style.setProperty('--vh', _val)
  }
}, 100)

watch(height, () => debouncedFn())
</script>

<style></style>
