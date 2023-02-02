<template>
  <div>
    <div class="h-[calc(var(--vh,1vh)*100-120px)] flex flex-col justify-around">

      <div class="hidden md:block" />

      <home-name />

      <home-extra-info />

      <home-actions />

      <home-counter />

      <home-skills />

    </div>

    <div class="h-[50px] flex items-center">
      <home-footer />
    </div>

  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
