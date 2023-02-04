<template>
  <div
      class="md:px-12 min-h-[calc(var(--vh,1vh)*100-70px)]"
      :class="{
        'py-7 md:py-10': !$slots['header'],
        'pb-7 md:pb-10 pt-7': $slots['header'],
      }"
  >
    <slot name="header"></slot>
    <div
        class="mx-auto max-w-none"
        :class="{
          'pt-6': $slots['header'],
          'prose prose-slate lg:prose-lg': prose
        }"
    >
      <slot :prose="'prose prose-slate lg:prose-lg'"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  prose?: boolean
}>(), {
  prose: true
})
</script>

<style scoped></style>
