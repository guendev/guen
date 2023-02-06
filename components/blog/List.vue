<template>
  <includes-loading :loading="loading">
    <div class="flex flex-wrap -mx-2.5 min-h-[400px]">
      <div
          v-for="(blog, index) in posts"
          :key="index"
          class="w-full sm:w-1/2 md:w-1/3 p-3"
      >
        <div class="rounded-lg overflow-hidden shadow-default hover:shadow-primary-100">
          <blog-item :blog="blog"/>
        </div>
      </div>
    </div>
    <div v-if="!showMore && !loading && posts.length > 6" class="mt-4">
      <blog-more @click="showMore = !showMore"/>
    </div>
  </includes-loading>
</template>

<script lang="ts" setup>
import {PostEntity} from "~/entities/post.entity"

const loading = ref(true)
const postsRaw = useFirestore(fsCollection(getFirestore(), 'posts'), [])

watch(postsRaw, () => loading.value = false)

const showMore = ref(false)

// order post by createdAt and limit 6 item first by showMore variable
const posts = computed<PostEntity[]>(() => {
  return (postsRaw.value as PostEntity[]).sort((a, b) => {
    return b.createdAt - a.createdAt
  }).slice(0, showMore.value ? 100 : 6)
})
</script>

<style scoped></style>
