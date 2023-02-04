<template>
  <div class="prose prose-slate lg:prose-lg mx-auto max-w-none">
    <div id="editor"></div>
  </div>
</template>

<script lang="ts" setup>
import EditorJS from '@editorjs/editorjs'

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

const editor = ref<EditorJS|undefined>()

const getPreviewURL = async (path: string) => {
  return fsGetDownloadURL(fsRef(getStorage(), path))
}

const uploadByFile = async (file: File) => {
  // upload file to firebase storage with file name as the current timestamp
  const res = await fsUploadBytes(fsRef(getStorage(), `/posts/${Date.now()}`), file)
  const previewUrl = await getPreviewURL(res.metadata.fullPath)
  return {
    success: 1,
    file: {
      url: previewUrl,
      path: res.metadata.fullPath,
      store: 'firebase'
    }
  }
}

const uploadByUrl = (url: string) => {
  console.log(url)
}

onMounted(() => nextTick(() => {
  editor.value = new EditorJS({
    holder: 'editor',
    placeholder: 'Write your story...',
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
    }
  })
}))
</script>

<style>
.ce-block__content,
.ce-toolbar__content {
  max-width: unset;
}
</style>
