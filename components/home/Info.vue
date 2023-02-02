<template>
  <div
    id="info"
      class="flex flex-col justify-around"
  >

    <div />

    <home-name />

    <home-extra-info />

    <home-actions />

    <home-counter />

    <home-skills />

    <home-footer />

  </div>
</template>

<script lang="ts" setup>
const minHeight = computed(() => `calc(var(--vh) * 100 - 70px)`)
</script>

<style scoped>
#info {
  min-height: v-bind(minHeight);
}
</style>
