<template>
  <Teleport v-if="show" :to="to">
    <slot></slot>
  </Teleport>
</template>

<script lang="ts" setup>
defineProps<{
  to: string
}>()
const show = ref(false)

onMounted(() => nextTick(() => show.value = true))
</script>

<style scoped></style>
