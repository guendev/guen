<template>
  <nuxt-link
      class="flex"
      :to="link.admin.post(post)"
  >
    <div
        class="aspect-w-5 aspect-h-3 overflow-hidden max-w-[220px] rounded-lg shadow-default shadow-primary-100 flex-shrink-0"
    >
      <img src="https://tn1-f2.kkmh.com/image/221125/vlbGGKxIv.webp-t.w540.webp.h" alt="" class="w-full h-full object-cover transition transform hover:scale-105" />
    </div>

    <div class="ml-5">
      <h2 class="text-[19px] font-semibold">{{ title }}</h2>

      <p class="text-[15px] text-gray-500 line-clamp-3 mt-1">{{ description || '--' }}</p>

      <div class="mt-2.5 flex items-center">
        <div class="text-primary-600 text-[14px] font-semibold">
          {{ post.category }}
        </div>
        <div class="h-[13px] w-[2px] bg-gray-400 rounded-lg mx-3"></div>
        <div class="text-gray-400 text-[14px]">
          {{ $dayjs(post.createdAt).fromNow() }}
        </div>
        <template v-if="post.view">
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
import {PostEntity} from "~/entities/post.entity"
import {usePost} from "#imports";
const props = defineProps<{
  post: PostEntity
}>()

const { title, content, description } = usePost(props.post)

const link = useLinkComplex()

</script>

<style scoped></style>
