<template>
  <div>
    <div class="flex flex-wrap -mx-2.5">
      <div
          v-for="(blog, index) in posts"
          :key="index"
          class="w-full sm:w-1/2 md:w-1/3 p-3"
      >
        <div class="rounded-lg overflow-hidden shadow-default hover:shadow-primary-100">
          <blog-item :blog="blog" />
        </div>
      </div>
    </div>
    <div class="mt-4">
      <blog-more />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {PostEntity} from "~/entities/post.entity";

const loading = ref(true)
const postsRaw = useFirestore(fsCollection(getFirestore(), 'posts'), [])

watch(postsRaw, () => loading.value = false)

// order post by createdAt
const posts = computed<PostEntity[]>(() => {
  return (postsRaw.value as PostEntity[]).sort((a, b) => {
    return b.createdAt - a.createdAt
  })
})
</script>

<style scoped></style>
