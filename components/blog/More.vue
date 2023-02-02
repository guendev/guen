<template>
  <button class="">
    <span class="lg:text-[15px] small:text-[13px] text-[12px] uppercase font-semibold">Load More</span>
  </button>
</template>

<script lang="ts" setup>

</script>

<style scoped>
button {
  @apply w-full flex justify-center items-center rounded-full;
  @apply text-white;
  @apply shadow-default shadow-primary-300;
  @apply lg:py-2.5 small:py-2;
  @apply bg-gradient-to-r from-primary-600 to-primary-500;
}
</style>
