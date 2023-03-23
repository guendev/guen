<template>
  <Teleport to="body">
    <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div
          v-if="notify"
          ref="notifyRef"
          class="opacity-0 bg-gradient-to-r text-white lg:px-5 lg:py-2.5 px-4 py-2 flex justify-center items-center shadow-default rounded-lg"
          :class="{
            'from-primary-500 to-primary-600 shadow-primary-300': notify.type === NotifyType.SUCCESS,
            'from-rose-500 to-rose-600 shadow-rose-300': notify.type === NotifyType.ERROR
          }"
      >
        {{ notify.message }}
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import {NotifyEntity, NotifyType} from "~/entities/notify.entity"
import {useNotify} from "#imports"

const notify = ref<NotifyEntity|undefined>()
const notifyRef = ref<HTMLElement>()
const { $anime } = useNuxtApp()
const fireData = (data: NotifyEntity) => {
  if(notify.value) {
    notify.value = data
  } else {
    notify.value = data
    // Show animation by using $anime and remove it after 3s
    nextTick(() => {
      // @ts-ignore
      $anime({
        targets: notifyRef.value,
        opacity: 1,
        scale: [0.8, 1],
        translateY: [-50, 0],
        duration: 300,
        easing: 'easeOutExpo',
        complete: () => {
          setTimeout(() => {
            // @ts-ignore
            $anime({
              targets: notifyRef.value,
              opacity: 0,
              duration: 300,
              easing: 'easeOutExpo',
              complete: () => {
                notify.value = undefined
              }
            })
          }, 3000)
        }
      })
    })
  }
}

useNotify<NotifyEntity>({
  onReceive: (data) => data && fireData(data)
})
</script>

<style scoped></style>
