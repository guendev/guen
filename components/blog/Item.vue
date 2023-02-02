<template>
  <nuxt-link class="block" to="/blog/abc">
    <div class="aspect-w-5 aspect-h-3 overflow-hidden">
      <img src="https://tn1-f2.kkmh.com/image/221125/vlbGGKxIv.webp-t.w540.webp.h" alt="" class="w-full h-full object-cover transition transform hover:scale-105" />
    </div>

    <div class="p-3.5">
      <h2 class="text-lg font-semibold">{{ blog.title }}</h2>

      <p class="text-[15px] text-gray-500 line-clamp-3 mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur consectetur eos eveniet laboriosam quo velit vitae voluptatum. Facere fugit qui suscipit tenetur velit! Autem consequatur ducimus iste reprehenderit voluptas.</p>

      <div class="mt-2.5 flex items-center font-semibold">
        <div class="text-primary-600 text-[14px]">LGBTQ+</div>
        <div class="h-[13px] w-[2px] bg-gray-400 rounded-lg mx-3"></div>
        <div class="text-gray-500 text-[12px]">4H AGO</div>
      </div>

    </div>

  </nuxt-link>
</template>

<script lang="ts" setup>
import {BlogEntity} from "~/entities/blog.entity";

const props = defineProps<{
  blog: BlogEntity
}>()
</script>

<style scoped></style>
