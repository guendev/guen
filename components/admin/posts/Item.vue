<template>
  <nuxt-link
      class="flex"
      :to="link.admin.post(post)"
  >
    <div class="overflow-hidden w-full max-w-[220px] rounded-lg shadow-default shadow-primary-100 flex-shrink-0">
      <div
          class="aspect-w-5 aspect-h-3"
      >
        <nuxt-img :src="post.avatar.path" provider="backend" class="w-full h-full object-cover transition transform hover:scale-105"  />
      </div>
    </div>

    <div class="ml-5">
      <h2 class="text-[19px] font-semibold">{{ title }}</h2>

      <p class="text-[15px] text-gray-500 line-clamp-3 mt-1">{{ description || '--' }}</p>

      <div class="mt-2.5 flex items-center">
        <div class="text-primary-600 text-[14px] font-semibold">
          {{ post.category.name }}
        </div>
        <div class="h-[13px] w-[2px] bg-gray-400 rounded-lg mx-3"></div>
        <div class="text-gray-400 text-[14px]">
          {{ $dayjs(post.createdAt).fromNow() }}
        </div>
        <template v-if="post.views">
          <div class="h-[13px] w-[2px] bg-gray-400 rounded-lg mx-3"></div>
          <div class="text-gray-400 text-[14px] ml-1">
            {{ post.views || '0' }} views
          </div>
        </template>
      </div>

    </div>

  </nuxt-link>
</template>

<script lang="ts" setup>
import {GetPosts_posts} from "~/apollo/queries/__generated__/GetPosts"
import {LocalizationContentInput, LocalizationFieldInput} from "~/apollo/__generated__/serverTypes"
import {OutputData} from "@editorjs/editorjs"

const { locale } = useI18n()

const props = defineProps<{
  post: GetPosts_posts
}>()

const title = computed<string>({
  get: () => props.post.title[locale.value as keyof LocalizationContentInput] as string,
  set: (value: string) => {
    props.post.title[locale.value as keyof LocalizationContentInput] = value
  }
})
const description = computed<string>({
  get: () => props.post.description[locale.value as keyof LocalizationFieldInput] as string,
  set: (value: string) => {
    props.post.description[locale.value as keyof LocalizationFieldInput] = value
  }
})

const content = computed<OutputData>({
  get: () => props.post.content[locale.value as keyof LocalizationContentInput] as OutputData,
  set: (value: OutputData) => {
    props.post.content[locale.value as keyof LocalizationContentInput] = value
  }
})

const link = useLinkComplex()

</script>

<style scoped></style>
