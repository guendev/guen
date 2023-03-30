<template>
  <includes-loading :loading="false">

    <client-only>
      <form id="post-form">
        <input
            v-model="title"
            type="text"
            class="_name text-[22px]"
            placeholder="Post name"
        />

        <div class="mt-7 flex">

          <admin-creator-avatar v-model:value="form.avatar" :image="currentPost?.avatar" class="_avatar h-[160px] w-[266px] before:z-[3] flex-shrink-0" />

          <textarea
              v-model="description"
              class="h-[160px] w-full bg-gray-100 rounded-md relative text-gray-500 ml-7 focus:outline-0 p-4 text-[15px]"
              placeholder="Post description"
          ></textarea>
        </div>

        <admin-creator-categories class="mt-5" v-model:value="form.category" />
        <lazy-admin-creator-editor ref="editorRef" v-model:value="content" class="mt-7" />
      </form>
    </client-only>

    <includes-teleport to="#header-actions">
      <button
          class="ml-7 bg-gradient-to-r from-rose-500 to-rose-600 rounded-lg text-white px-2.5 py-2 flex justify-center items-center shadow-default shadow-rose-300 transition disabled:transition disabled:opacity-60"
      >
        <Icon :name="isNewDoc ? 'line-md:uploading-loop' : 'mingcute:delete-2-line'"/>
        <span class="text-[13px] font-semibold ml-1">
          REMOVE
        </span>
      </button>

      <button
          @click="publicNow"
          class="ml-7 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg text-white px-2.5 py-2 flex justify-center items-center shadow-default shadow-primary-300 transition disabled:transition disabled:opacity-60"
      >
        <Icon :name="loading ? 'line-md:uploading-loop' : isNewDoc ? 'ic:sharp-plus' : 'material-symbols:check-small-rounded'"/>
        <span class="text-[13px] font-semibold ml-1">
          {{ isNewDoc ? 'PUBLIC NOW' : 'UPDATE NOW' }}
        </span>
      </button>
    </includes-teleport>
  </includes-loading>
</template>

<script lang="ts" setup>
import { useStorage } from '@vueuse/core'
import {CreatePostInput, LocalizationContentInput, LocalizationFieldInput} from "~/apollo/__generated__/serverTypes"
import {OutputData} from "@editorjs/editorjs/types/data-formats/output-data";
import {CREATE_POST, UPDATE_POST} from "~/apollo/mutates/post.mutate";
import {CreatePost, CreatePostVariables} from "~/apollo/mutates/__generated__/CreatePost";
import {NotifyEntity, NotifyType} from "~/entities/notify.entity";
import {GET_POST} from "~/apollo/queries/posts.query";
import {AdminGetPost, AdminGetPostVariables} from "~/apollo/queries/__generated__/AdminGetPost";
import {UpdatePost, UpdatePostVariables} from "~/apollo/mutates/__generated__/UpdatePost";

const { locale } = useI18n()
const router = useRouter()
const route = useRoute()
const link = useLinkComplex()

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
const [isNewDoc, toggleIsNewDoc] = useToggle(true)

/**
 * Only using this section for post editing
 */
const { onResult, onError, result } = useQuery<AdminGetPost, AdminGetPostVariables>(GET_POST, {
  filter: {
    slug: String(route.params.id)
  }
}, {
  enabled: !!route.params.id
})
const currentPost = computed(() => result.value?.post)
onResult((result) => {
  if (result.data?.post) {
    // migrate data to form
    const _data = JSON.parse(JSON.stringify(result.data.post))
    Object.assign(form.value, {
      avatar: _data.avatar.id,
      category: _data.category.id,
      content: _data.content,
      description: _data.description,
      title: _data.title
    })
    toggleIsNewDoc()
  }
})
onError((e) => {
  // redirect to create new post
  fire({
    type: NotifyType.ERROR,
    message: 'Post not found. Redirecting to create new post'
  })
  router.push(link.createPost())
})

// const backup = useStorage<CreatePostInput>('_post_form', form.value)
// watch(form, (val) => {
//   // if(isNewDoc.value) {
//     backup.value = toRaw(val)
//   // }
// }, { deep: true })

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
const content = computed<OutputData>({
  get: () => form.value.content[locale.value as keyof LocalizationContentInput] as OutputData,
  set: (value: OutputData) => {
    form.value.content[locale.value as keyof LocalizationContentInput] = value
  }
})

const { mutate: createPost } = useMutation<CreatePost, CreatePostVariables>(CREATE_POST)
const { mutate: updatePost } = useMutation<UpdatePost, UpdatePostVariables>(UPDATE_POST)

const { fire } = useNotify<NotifyEntity>()
const [loading, toggleLoading] = useToggle(false)
const publicNow = async () => {
  if (!form.value.title['en']) {
    fire({
      type: NotifyType.ERROR,
      message: 'English title is required'
    })
    return
  }
  toggleLoading()

  try {

    if (isNewDoc.value) {
      await createPost({
        input: form.value
      })
    } else {

      const _data = toRaw(form.value)
      // remove __typename for each element
      ;['title', 'description', 'content'].forEach((key) => {
        // @ts-ignore
        delete _data[key].__typename
        // @ts-ignore
        delete _data[key].id
      })

      await updatePost({
        input: {
          id: currentPost.value?.id,
          ...form.value
        }
      })

    }

    fire({
      type: NotifyType.SUCCESS,
      message: isNewDoc.value ? 'Post created' : 'Post updated'
    })

  } catch (e) {
    //
  }

  toggleLoading()
}

</script>

<style scoped lang="scss">
#post-form {
  ._name {
    @apply w-full py-2.5 focus:outline-none border-b font-semibold pr-5 placeholder-gray-400 placeholder:font-normal
  }
}
</style>
