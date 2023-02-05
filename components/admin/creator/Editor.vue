<template>
  <div class="prose prose-slate lg:prose-lg mx-auto max-w-none">
    <div id="editor"></div>
  </div>
</template>

<script lang="ts" setup>
import EditorJS, {API, OutputData} from '@editorjs/editorjs'

import Header from '@editorjs/header'
import List from '@editorjs/list'
import CodeTool from '@editorjs/code'
import QuoteTool from '@editorjs/quote'
import DelimiterTool from '@editorjs/delimiter'
import TableTool from '@editorjs/table'
import RawTool from '@editorjs/raw'
import WarningTool from '@editorjs/warning'
import CheckListTool from '@editorjs/checklist'
import ImageTool from '@editorjs/image'
import Underline from '@editorjs/underline'
import Embed from '@editorjs/embed'
import InlineCodeTool from '@editorjs/inline-code'

const props = defineProps<{
  value: OutputData
}>()

const editor = ref<EditorJS|undefined>()
const upload = useUpload()

const uploadByFile = async (file: File) => {
  const imageData = await upload.toFireStore(file, 'posts')
  return {
    success: 1,
    file: imageData
  }
}
const uploadByUrl = (url: string) => {
  console.log(url)
}

// binding two ways value by using emit
const emit = defineEmits<{
  (e: 'update:value', data: OutputData): void
}>()

const initEditor = () => {
  editor.value = new EditorJS({
    holder: 'editor',
    placeholder: 'Write your story...',
    data: props.value,
    tools: {
      header: Header,
      image: {
        class: ImageTool,
        config: {
          uploader: {
            /**
             * Upload file to the server and return an uploaded image data
             * @param {File} file - file selected from the device or pasted by drag-n-drop
             * @return {Promise.<{success, file: {url}}>}
             */
            uploadByFile,
            /**
             * Send URL-string to the server. Backend should load image by this URL and return an uploaded image data
             * @param {string} url - pasted image URL
             * @return {Promise.<{success, file: {url}}>}
             */
            uploadByUrl
          }
        }
      },
      list: List,
      code: CodeTool,
      quote: QuoteTool,
      delimiter: DelimiterTool,
      table: TableTool,
      raw: RawTool,
      warning: WarningTool,
      checklist: CheckListTool,
      underline: Underline,
      embed: Embed,
      inlineCode: InlineCodeTool
    },
    onChange(api: API, event: CustomEvent) {
      api.saver.save().then((data) => emit('update:value', data))
    }
  })
}

onMounted(() => nextTick(() => initEditor()))
</script>

<style>
.ce-block__content,
.ce-toolbar__content {
  max-width: unset;
}
</style>
