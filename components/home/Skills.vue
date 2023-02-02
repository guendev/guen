<template>

  <div class="lg:text-[30px] text-[25px] -mb-4">

    <div v-for="icon in icons" :key="icon" class="_home_item opacity-0">
      <Icon :name="icon" />
    </div>

  </div>

</template>

<script lang="ts" setup>

import {useNuxtApp} from "#imports";

const icons = ref([
  'vscode-icons:file-type-swift',
  'vscode-icons:file-type-flutter',
  'logos:nestjs',
  'logos:laravel',
  'vscode-icons:file-type-vue',
  'vscode-icons:file-type-firebase',
  'vscode-icons:file-type-graphql',
  'logos:google-cloud',
  'logos:figma'
])

const { $anime } = useNuxtApp()

onMounted(() => {
  $anime({
    targets: '._home_item',
    scale: [0.9, 1],
    // transform vertical
    translateY: [-20, 0],
    opacity: 1,
    delay: $anime.stagger(150)
  })
})
</script>

<style scoped>
div {
  @apply flex flex-wrap;

  svg {
    @apply mr-5 transition hover:scale-125 mb-4
  }
}
</style>
