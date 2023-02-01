<template>
  <div class="text-gray-800">
    Strange developing for almost <b>4 years</b>
    <br v-if="largerThanMd" />
    as a queer developer.
  </div>
</template>

<script lang="ts" setup>
import {breakpointsTailwind} from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind)
const largerThanMd = breakpoints.greater('md')
</script>

<style scoped></style>
