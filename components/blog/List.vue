<template>
  <div>
    <div class="flex flex-wrap -mx-2.5">
      <div
          v-for="(blog, index) in blogs"
          :key="index"
          class="w-full sm:w-1/2 md:w-1/3 p-3"
      >
        <div class="rounded-lg overflow-hidden shadow-default hover:shadow-primary-100">
          <blog-item
              :blog="blog"
          />
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

const blogs = ref<PostEntity[]>([
  {
    id: 1,
    title: 'Blog 1',
    content: 'Blog 1 content',
    description: 'Blog 1 description',
    image: 'https://picsum.photos/200/300',
    createdAt: Date.now()
  },
  {
    id: 1,
    title: 'Blog 1',
    content: 'Blog 1 content',
    description: 'Blog 1 description',
    image: 'https://picsum.photos/200/300',
    createdAt: Date.now()
  },
  {
    id: 1,
    title: 'Blog 1',
    content: 'Blog 1 content',
    description: 'Blog 1 description',
    image: 'https://picsum.photos/200/300',
    createdAt: Date.now()
  },
  {
    id: 1,
    title: 'Blog 1',
    content: 'Blog 1 content',
    description: 'Blog 1 description',
    image: 'https://picsum.photos/200/300',
    createdAt: Date.now()
  },
  {
    id: 1,
    title: 'Blog 1',
    content: 'Blog 1 content',
    description: 'Blog 1 description',
    image: 'https://picsum.photos/200/300',
    createdAt: Date.now()
  },
  {
    id: 1,
    title: 'Blog 1',
    content: 'Blog 1 content',
    description: 'Blog 1 description',
    image: 'https://picsum.photos/200/300',
    createdAt: Date.now()
  }
])
</script>

<style scoped></style>
