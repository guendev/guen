<template>
  <div
      class="md:px-12 min-h-[calc(100vh-70px)]"
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

</script>

<style scoped></style>
