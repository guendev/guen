<template>
  <div id="editor"></div>
</template>

<script lang="ts" setup>
import EditorJS from '@editorjs/editorjs'

//@ts-ignore
import Header from '@editorjs/header'
//@ts-ignore
import List from '@editorjs/list'
//@ts-ignore
import CodeTool from '@editorjs/code'
//@ts-ignore
import QuoteTool from '@editorjs/quote'
//@ts-ignore
import DelimiterTool from '@editorjs/delimiter'
//@ts-ignore
import TableTool from '@editorjs/table'
//@ts-ignore
import RawTool from '@editorjs/raw'
//@ts-ignore
import WarningTool from '@editorjs/warning'
//@ts-ignore
import CheckListTool from '@editorjs/checklist'
//@ts-ignore
import ImageTool from '@editorjs/image'
//@ts-ignore
import Underline from '@editorjs/underline'
//@ts-ignore
import Embed from '@editorjs/embed'
//@ts-ignore
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
