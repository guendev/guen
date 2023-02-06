<template>
  <nuxt-link class="block" to="/blog/abc">
    <div class="aspect-w-5 aspect-h-3 overflow-hidden">
      <img src="https://tn1-f2.kkmh.com/image/221125/vlbGGKxIv.webp-t.w540.webp.h" alt="" class="w-full h-full object-cover transition transform hover:scale-105" />
    </div>

    <div class="p-3.5">
      <h2 class="text-lg font-semibold">{{ title }}</h2>

      <p class="text-[15px] text-gray-500 line-clamp-3 mt-1">
        {{ description }}
      </p>

      <div class="mt-2.5 flex items-center">
        <div class="text-primary-600 text-[14px] font-semibold">
          {{ blog.category }}
        </div>
        <div class="h-[13px] w-[2px] bg-gray-400 rounded-lg mx-3"></div>
        <div class="text-gray-400 text-[14px]">
          {{ $dayjs(blog.createdAt).fromNow() }}
        </div>
        <template v-if="blog.view">
          <div class="h-[13px] w-[2px] bg-gray-400 rounded-lg mx-3"></div>
          <div class="text-gray-400 text-[14px] ml-1">
            {{ post.view || '0' }} views
          </div>
        </template>
      </div>

    </div>

  </nuxt-link>
</template>

<script lang="ts" setup>
import {PostEntity} from "~/entities/post.entity";

const props = defineProps<{
  blog: PostEntity
}>()

const { title, description } = usePost(props.blog)
</script>

<style scoped></style>
