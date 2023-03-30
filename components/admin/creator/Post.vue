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

          <admin-creator-avatar v-model:value="form.avatar" v-model:image="imageForm" class="_avatar h-[160px] w-[266px] before:z-[3] flex-shrink-0" />

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
          v-if="!isNewDoc"
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
          :disabled="loading"
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
import {ImageEntity} from "~/apollo/queries/__generated__/ImageEntity";

const { locale } = useI18n()
const router = useRouter()
const route = useRoute()
const link = useLinkComplex()
const { fire } = useNotify<NotifyEntity>()

const formDefault: CreatePostInput = {
  avatar: '',
  category: '',
  content: {
    en: {},
    jp: {},
    vi: {}
  },
  description: {
    en: '',
    jp: '',
    vi: ''
  },
  tags: [],
  title: {
    en: '',
    jp: '',
    vi: ''
  }
};
const form = ref<CreatePostInput>(formDefault)
const imageForm = ref<ImageEntity>()

const [isNewDoc, toggleIsNewDoc] = useToggle(route.path === router.resolve(link.createPost()).path)

/**
 * Auto save form data to local storage
 */
interface Storage {
  draft: {
    form: CreatePostInput,
    image?: ImageEntity
  },
  posts: Record<string, {
    form: CreatePostInput,
    image?: ImageEntity
  }>
}
const store = useStorage<Storage>('posts', {
  draft: {
    form: form.value
  },
  posts: {}
})
watch([form, imageForm], ([val, val2]) => {
  if(isNewDoc.value) {
    store.value.draft.form = toRaw(val)
    store.value.draft.image = toRaw(val2)
  } else {
    store.value.posts[route.params.id as string] = {
      form: toRaw(val),
      image: toRaw(val2)
    }
  }
}, { deep: true })

const init = () => {
  if (isNewDoc.value) {
    if (store.value.draft.form) {
      form.value = store.value.draft.form
      imageForm.value = store.value.draft.image
    }
  } else {
    if (store.value.posts[route.params.id as string]) {
      form.value = store.value.posts[route.params.id as string].form
      imageForm.value = store.value.posts[route.params.id as string].image

      // nextTick(() => fire({
      //   type: NotifyType.SUCCESS,
      //   message: 'Auto save data enabled'
      // }))
    }
  }
}
onMounted(() => init())

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
    if(!store.value.posts[route.params.id as string]) {
      const _data = JSON.parse(JSON.stringify(result.data.post))
      imageForm.value = _data.avatar
      Object.assign(form.value, {
        avatar: _data.avatar.id,
        category: _data.category.id,
        content: _data.content,
        description: _data.description,
        title: _data.title
      })
    }
  }
})
onError(() => {
  // redirect to create new post
  fire({
    type: NotifyType.ERROR,
    message: 'Post not found. Redirecting to create new post'
  })
  router.push(link.createPost())
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
const content = computed<OutputData>({
  get: () => form.value.content[locale.value as keyof LocalizationContentInput] as OutputData,
  set: (value: OutputData) => {
    form.value.content[locale.value as keyof LocalizationContentInput] = value
  }
})

const { mutate: createPost } = useMutation<CreatePost, CreatePostVariables>(CREATE_POST)
const { mutate: updatePost } = useMutation<UpdatePost, UpdatePostVariables>(UPDATE_POST)

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
      const _post = await createPost({
        input: form.value
      })
      store.value.draft = {
        form: formDefault
      }

      if (_post?.data) {
        router.replace(link.admin.post(_post.data.createPost))
      }

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
          id: currentPost.value?.id as string,
          ...form.value
        }
      })
      delete store.value.posts[route.params.id as string]

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

// Todo: add remove post
</script>

<style scoped lang="scss">
#post-form {
  ._name {
    @apply w-full py-2.5 focus:outline-none border-b font-semibold pr-5 placeholder-gray-400 placeholder:font-normal
  }
}
</style>
