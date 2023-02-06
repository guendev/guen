<template>
  <div class="relative">
    <div
        class="transition duration-300 ease-in-out z-[1] relative"
        :class="{
          'opacity-50 pointer-events-none': loading
        }"
    >
      <slot></slot>
    </div>

    <div
        v-if="loading"
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]"
    >
      <Icon name="svg-spinners:ring-resize" class="text-[50px] text-primary-500" />
    </div>

  </div>
</template>

<script lang="ts" setup>
defineProps<{
  loading: boolean
}>()
</script>

<style scoped></style>
