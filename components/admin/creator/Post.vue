<template>
  <div>
    <form>
      <input
          v-model="title"
          type="text"
          class="w-full py-2.5 focus:outline-none text-[22px] border-b font-semibold pr-5 placeholder-gray-400 placeholder:font-normal"
          placeholder="Post name"
      />

      <div class="mt-7 flex">

        <div
            class="_avatar h-[160px] w-[266px] bg-gray-100 rounded-md relative text-gray-400 cursor-pointer overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full before:transition before:hover:bg-primary-500 before:z-[3]"
            @click="open"
        >
          <img
              v-if="form.image.url"
              :src="form.image.url"
              alt=""
              class="w-full h-full object-cover relative z-[2]"
          />

          <Icon
              class="text-[35px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]"
              name="ri:upload-cloud-line"
          />

        </div>

        <textarea
            v-model="description"
            class="h-[160px] w-[320px] bg-gray-100 rounded-md relative text-gray-500 ml-7 focus:outline-0 p-4 text-[15px]"
            placeholder="Post description"
        ></textarea>

        <div class="ml-7">

          <ul>
            <li
                v-for="item in categories"
                :key="item"
                class="mb-5 last:mb-0"
            >
              <button
                  class="flex items-center"
                  @click.prevent="form.category = item"
              >
              <span
                  class="w-6 h-6 bg-gray-100 rounded-lg border-2 transition flex justify-center items-center"
                  :class="{
                    'border-primary-600': item === form.category,
                    'border-transparent': item !== form.category
                  }"
              >
                <Icon
                    name="material-symbols:check-small-rounded"
                    class="text-[20px] text-primary-600 transform transition duration-300"
                    :class="{
                    'scale-0': item !== form.category
                  }"
                />
              </span>
                <span class="ml-3 text-[15px]">{{ item }}</span>
              </button>
            </li>
          </ul>

        </div>

      </div>

      <client-only>
        <admin-creator-editor v-if="isShowEditor" ref="editorRef" class="mt-7" v-model:value="content" />
      </client-only>

    </form>
    <includes-teleport to="#header-actions">
      <button
          class="ml-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg text-white px-2.5 py-2 flex justify-center items-center shadow-default shadow-primary-300 transition disabled:transition disabled:opacity-60"
          :disabled="isUploading || isUploadingImage || isGettingDoc"
          @click="publicNow"
      >
        <Icon :name="isUploading ? 'line-md:uploading-loop' : isNewDoc ? 'ic:sharp-plus' : 'material-symbols:check-small-rounded'"/>
        <span class="text-[13px] font-semibold ml-1">
          {{ isNewDoc ? 'UPDATE NOW' : 'PUBLIC NOW' }}
        </span>
      </button>
    </includes-teleport>

  </div>
</template>

<script lang="ts" setup>
import { useStorage } from '@vueuse/core'
import slugify from 'slugify'
import {PostEntity, PostEntityDefault, PostForm} from "~/entities/post.entity"
import {LanguageEntity} from "~/entities/language.entity";
import {OutputData} from "@editorjs/editorjs"

const editorRef = ref()
const isShowEditor = ref(false)

const form = ref<PostForm|PostEntity>(PostEntityDefault)
const categories = ref<string[]>(['LGBTQ+', 'Foreign Language', 'Javascript', 'Swift'])
// backing form up automatically by using localstorage
const backup = useStorage<PostForm>('_post_form', PostEntityDefault)
watch(form, (val) => {
  if(isNewDoc.value) {
    backup.value = toRaw(val)
  }
}, { deep: true })

const route = useRoute()
const router = useRouter()
const isNewDoc = computed(() => !(/^admin-posts-id/.test(route.name as string)))
const isGettingDoc = ref(false)
const initForm = async () => {
  //admin-posts-id
  if(!(/^admin-posts-id/.test(route.name as string))) {
    form.value = backup.value
  } else {
    isGettingDoc.value = true
    const docSnap = await fsGetDoc(fsDocInstance(getFirestore(), 'posts', route.params.id as string))
    if(docSnap.exists()) {
      form.value = docSnap.data() as PostForm
    } else {
      // Todo: Notify
      router.replace(`/admin/creator/post`)
    }
    isGettingDoc.value = false
  }
  isShowEditor.value = true
}

onMounted(() => initForm())

// form field by using getter and setter of computed
const { locale } = useI18n()
const title = computed<string>({
  get: () => form.value.title[locale.value as LanguageEntity],
  set: (val) => form.value.title[locale.value as LanguageEntity] = val
})
const description = computed<string>({
  get: () => form.value.description[locale.value as LanguageEntity],
  set: (val) => form.value.description[locale.value as LanguageEntity] = val
})
const content = computed<OutputData>({
  get: () => form.value.content[locale.value as LanguageEntity],
  set: (val) => form.value.content[locale.value as LanguageEntity] = val
})

// Upload
const upload = useUpload()
const isUploadingImage = ref(false)
const { files, open, reset } = useFileDialog({
  multiple: false,
  accept: 'image/*'
})
const uploadImage = async (file: File) => {
  isUploadingImage.value = true
  try {
    form.value.image = await upload.toFireStore(file, 'posts')
  } catch (e) {
    //
  }
  isUploadingImage.value = false
  reset()
}
watch(files, (val) => val?.length && uploadImage(val.item(0)!))


// submit post
// validate for the form, the field form.value.title[en] is required
const isUploading = ref(false)
const publicNow = async () => {
  isUploading.value = true
  if (!form.value.title['en']) {
    // Todo: fire a notify
    return
  }
  const id = isNewDoc.value ? slugify(form.value.title['en'], { lower: true }) : route.params.id as string
  const createdAt: number = isNewDoc.value ? Date.now() : (form.value as PostEntity).createdAt

  const doc: PostEntity = {
    id,
    ...toRaw(form.value),
    createdAt,
    updatedAt: Date.now()
  }

  try {
    await fsSetDoc(fsDocInstance(getFirestore(), "posts", id), doc)
    backup.value = null
    localStorage.removeItem('_post_form')
    if(isNewDoc.value) {
      router.replace(`/admin/posts/${id}`)
    }
  } catch (e) {
    //
  }
  isUploading.value = false
}
</script>

<style scoped>
._avatar:hover > svg {
  z-index: 4;
  color: white;
}
</style>
