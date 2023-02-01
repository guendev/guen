<template>

  <div class="lg:text-[30px] text-[25px] -mb-4">

    <Icon v-for="icon in icons" :key="icon" :name="icon" />

  </div>

</template>

<script lang="ts" setup>

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

</script>

<style scoped>
div {
  @apply flex flex-wrap;

  svg {
    @apply mr-5 transition hover:scale-125 mb-4
  }
}
</style>
