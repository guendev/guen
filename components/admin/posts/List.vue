<template>
  <div>
    <div class="flex items-center justify-between border-b pb-4">
      <h2 class="text-[20px]">
        Post List
        <span v-if="posts.length">{{ posts.length }}</span>
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


  </div>
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

// https://assets6.lottiefiles.com/datafiles/vhvOcuUkH41HdrL/data.json
</script>

<style scoped></style>
