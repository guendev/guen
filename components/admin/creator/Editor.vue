<template>
  <div id="editor"></div>
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

onMounted(() => nextTick(() => {

  editor.value = new EditorJS({
    holder: 'editor',
    tools: {
      header: Header,
      image: ImageTool,
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
      inlineCode: InlineCodeTool,
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
