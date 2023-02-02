<template>
  <div
      id="wrapper"
      class="md:px-12"
      :class="{
        'py-7 md:py-10': !$slots['header'],
        'pb-7 md:pb-10 pt-7': $slots['header'],
      }"
  >
    <slot name="header"></slot>
    <div
        class="prose prose-slate mx-auto lg:prose-lg max-w-none"
        :class="{
          'pt-6': $slots['header'],
        }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const minHeight = computed(() => `calc(var(--vh) * 100 - 70px)`)
</script>

<style scoped>
#wrapper {
  min-height: v-bind(minHeight);
}
</style>
