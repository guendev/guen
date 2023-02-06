<template>
  <div>
    <div class="flex items-center justify-between border-b pb-4">
      <h2 class="text-[20px]">
        Post List
        <span v-if="posts.length" class="text-[14px]">
          ({{ posts.length }})
        </span>
      </h2>

      <div v-if="false" class="w-[300px] flex items-center">
        <Icon
            name="ri:search-line"
            class="flex-shrink-0 text-[20px] text-gray-500"
        />
        <input
            type="text"
            class="h-full pl-2 focus:outline-0 w-full text-[15px] ml-1"
            placeholder="Keyword..."
        />
      </div>

    </div>

    <div class="mt-7">

      <div
          v-for="(post, index) in posts"
          :key="post.id"
          class="mb-7 last:mb-0"
      >
        <admin-posts-item :post="post" />
      </div>

    </div>

  </div>
</template>

<script lang="ts" setup>
import {PostEntity} from "~/entities/post.entity";
const postsRaw = useFirestore(fsCollection(getFirestore(), 'posts'))

// order post by createdAt
const posts = computed<PostEntity[]>(() => {
  return (postsRaw.value as PostEntity[] || []).sort((a, b) => {
    return b.createdAt - a.createdAt
  })
})

// https://assets6.lottiefiles.com/datafiles/vhvOcuUkH41HdrL/data.json
</script>

<style scoped></style>
