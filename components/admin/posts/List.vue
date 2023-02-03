<template>

</template>

<script lang="ts" setup>
import {PostEntity} from "~/entities/post.entity";

const postsRaw = useRTDB<Record<number, PostEntity>>(dbRef(getDatabase(), 'posts'))

// order post by createdAt
const posts = computed(() => {
  return Object.values(postsRaw.value || {}).sort((a, b) => {
    return b.createdAt - a.createdAt
  })
})
</script>

<style scoped></style>
