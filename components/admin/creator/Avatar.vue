<template>
  <div @click="open">
    <!--          <img-->
    <!--              v-if="form.image.url"-->
    <!--              :src="form.image.url"-->
    <!--              alt=""-->
    <!--              class="w-full h-full object-cover relative z-[2]"-->
    <!--          />-->

    <Icon
        class="text-[35px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]"
        name="ri:upload-cloud-line"
    />

  </div>
</template>

<script lang="ts" setup>
// Upload
const { upload, onResult } = useUpload()
const isUploadingImage = ref(false)
const { files, open, reset } = useFileDialog({
  multiple: false,
  accept: 'image/*'
})

watch(files, (files) => files?.length && upload(files.item(0)!))

onResult((result) => {
  console.log(result)
  reset()
})

</script>

<style scoped lang="scss">
._avatar {
  @apply bg-gray-100 rounded-md relative text-gray-400 cursor-pointer overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full before:transition before:hover:bg-primary-500;
  &:hover > svg {
    z-index: 4;
    @apply text-white transition;
  }
}
</style>
