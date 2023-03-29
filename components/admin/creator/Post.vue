<template>
  <includes-loading :loading="false">
    <form id="post-form">
      <input
          v-model="title"
          type="text"
          class="_name text-[22px]"
          placeholder="Post name"
      />

      <div class="mt-7 flex">

        <admin-creator-avatar class="_avatar h-[160px] w-[266px] before:z-[3] flex-shrink-0" />

        <textarea
            v-model="description"
            class="h-[160px] w-full bg-gray-100 rounded-md relative text-gray-500 ml-7 focus:outline-0 p-4 text-[15px]"
            placeholder="Post description"
        ></textarea>
      </div>

      <admin-creator-categories class="mt-5" v-model:value="form.category" />

      <admin-creator-editor ref="editorRef" class="mt-7" />

    </form>
<!--    <includes-teleport to="#header-actions">-->
<!--      <button-->
<!--          v-if="!isNewDoc"-->
<!--          class="ml-7 bg-gradient-to-r from-rose-500 to-rose-600 rounded-lg text-white px-2.5 py-2 flex justify-center items-center shadow-default shadow-rose-300 transition disabled:transition disabled:opacity-60"-->
<!--          :disabled="isUploading || isUploadingImage || isGettingDoc || isRemoving"-->
<!--          @click="removePost"-->
<!--      >-->
<!--        <Icon :name="isRemoving ? 'line-md:uploading-loop' : 'mingcute:delete-2-line'"/>-->
<!--        <span class="text-[13px] font-semibold ml-1">-->
<!--          REMOVE-->
<!--        </span>-->
<!--      </button>-->

<!--      <button-->
<!--          class="ml-7 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg text-white px-2.5 py-2 flex justify-center items-center shadow-default shadow-primary-300 transition disabled:transition disabled:opacity-60"-->
<!--          :disabled="isUploading || isUploadingImage || isGettingDoc"-->
<!--          @click="publicNow"-->
<!--      >-->
<!--        <Icon :name="isUploading ? 'line-md:uploading-loop' : isNewDoc ? 'ic:sharp-plus' : 'material-symbols:check-small-rounded'"/>-->
<!--        <span class="text-[13px] font-semibold ml-1">-->
<!--          {{ isNewDoc ? 'PUBLIC NOW' : 'UPDATE NOW' }}-->
<!--        </span>-->
<!--      </button>-->
<!--    </includes-teleport>-->
  </includes-loading>
</template>

<script lang="ts" setup>
import {CreatePostInput, LocalizationContentInput, LocalizationFieldInput} from "~/apollo/__generated__/serverTypes"

const { locale } = useI18n()

const form = ref<CreatePostInput>({
  avatar: '',
  category: '',
  content: {
    en: {},
    jp: {},
    vn: {}
  },
  description: {
    en: '',
    jp: '',
    vn: ''
  },
  tags: [],
  title: {
    en: '',
    jp: '',
    vn: ''
  }
})

const title = computed<string>({
  get: () => form.value.title[locale.value as keyof LocalizationContentInput] as string,
  set: (value: string) => {
    form.value.title[locale.value as keyof LocalizationContentInput] = value
  }
})
const description = computed<string>({
  get: () => form.value.description[locale.value as keyof LocalizationFieldInput] as string,
  set: (value: string) => {
    form.value.description[locale.value as keyof LocalizationFieldInput] = value
  }
})

</script>

<style scoped lang="scss">
#post-form {
  ._name {
    @apply w-full py-2.5 focus:outline-none border-b font-semibold pr-5 placeholder-gray-400 placeholder:font-normal
  }
}
</style>
