<template>
  <div
      id="home-page"
      class="flex md:-mr-5 bg-white h-full transition transform opacity-0 -translate-y-5 ease-in-out duration-300"
  >

    <home-info class="md:w-1/2 w-full max-w-[500px] md:max-w-full mx-auto md:mx-0" />

    <home-avatar class="hidden md:block w-1/2" />

  </div>
</template>

<script lang="ts" setup>

const el = useCurrentElement()

onMounted(() => nextTick(() => {
  el.value?.classList.remove('opacity-0', '-translate-y-5')
}))
</script>

<style scoped>

</style>
