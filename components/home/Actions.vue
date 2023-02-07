<template>
  <div class="flex items-center">

    <button class="bg-gradient-to-r from-rose-500 to-rose-600 text-white lg:px-5 lg:py-2.5 px-4 py-2 flex justify-center items-center shadow-default shadow-rose-300">
      <span class="lg:text-[15px] text-[14px] font-semibold">Hire Me</span>
    </button>

    <button class="ml-7 font-bold text-gray-800" @click="openProjects">
      Projects
      <Icon class="text-[18px]" name="material-symbols:arrow-outward-rounded" />
    </button>

  </div>
</template>

<script lang="ts" setup>
const openProjects = () => {
  window.open('https://github.com/nguyenshort', '_blank')
}
</script>

<style scoped></style>
