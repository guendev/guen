<template>
  <blog-wrapper :prose="false">
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

    <includes-loading class="mt-7" :loading="false">

      <div
          v-for="(post, index) in posts"
          :key="post.id"
          class="mb-7 last:mb-0"
      >
        <admin-posts-item :post="post" />
      </div>

      <div v-if="!posts.length" class="w-[300px] mx-auto">
        <vue-lottie-player path="https://assets7.lottiefiles.com/private_files/lf30_i0cTdc.json" autoplay loop height="90%" width="100%"></vue-lottie-player>
      </div>

    </includes-loading>
    <includes-teleport to="#header-actions">
      <button
          class="ml-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg text-white px-2.5 py-1.5 flex justify-center items-center shadow-default shadow-primary-300"
          @click="() => $router.push(link.admin.postCreate())"
      >
        <Icon name="ic:sharp-plus"/>
        <span class="text-[13px] font-semibold ml-1">Add New</span>
      </button>
    </includes-teleport>
  </blog-wrapper>
</template>

<script lang="ts" setup>
import {GetPosts, GetPosts_posts, GetPostsVariables} from "~/apollo/queries/__generated__/GetPosts";
import {GET_POSTS} from "~/apollo/queries/posts.query";
import {VueLottiePlayer} from "@nguyenshort/vue-lottie";

const link = useLinkComplex()

const filter = reactive<GetPostsVariables>({
  filter: {
    limit: 10,
    offset: 0,
    sort: 'createdAt'
  }
})

const { result } = useQuery<GetPosts, GetPostsVariables>(GET_POSTS, filter)
const posts = computed<GetPosts_posts[]>(() => result.value?.posts || [])

// https://assets6.lottiefiles.com/datafiles/vhvOcuUkH41HdrL/data.json
</script>

<style scoped></style>
