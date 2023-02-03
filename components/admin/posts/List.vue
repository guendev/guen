<template>
  <div>
    <div class="flex items-center justify-between border-b pb-4">
      <h2 class="text-[20px]">
        Post List
        <span v-if="posts.length">{{ posts.length }}</span>
      </h2>

      <button
          class="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg text-white px-2.5 py-1.5 flex justify-center items-center shadow-default shadow-primary-300"
          @click="() => $router.push('/admin/creator/post')"
      >
        <Icon name="ic:sharp-plus"/>
        <span class="text-[13px] font-semibold ml-1">Add New</span>
      </button>

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
