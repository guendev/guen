<template>
  <div>
    <div ref="elRef" class="fixed w-full top-0">
      <div class="max-w-bootstrap mx-auto px-4 bootstrap:px-0">

        <div
            class="border-b flex items-center h-[70px] transition duration-300 ease-in-out"
            :class="{
                'border-transparent': openMenu
            }"
        >
          <h1 class="flex">
            <span>Guen</span>
          </h1>

          <div class="mr-auto ml-3">
            <img width="25" src="/images/lgbt.png" alt="" />
          </div>

          <ul v-if="largerThanMd" class="flex items-center font-medium">
            <li v-for="menu in menus" :key="menu.title" class="ml-6 first:ml-0">
              <a :href="menu.href" class="px-2 py-1 hover:bg-gray-100 rounded">
                {{ menu.title }}
              </a>
            </li>
          </ul>

          <button v-else @click="openMenu = !openMenu">
            <div
                class="w-[15px] h-[1.5px] bg-gray-900 rounded-full transition transform duration-300 ease-in-out origin-bottom-right"
                :class="{'-rotate-45': openMenu}"
            ></div>
            <div
                class="w-[15px] h-[1.5px] bg-gray-900 rounded-full transition transform duration-300 ease-in-out my-1"
                :class="{ 'opacity-0': openMenu }"
            ></div>
            <div
                class="w-[15px] h-[1.5px] bg-gray-900 rounded-full transition transform duration-300 ease-in-out origin-bottom-right"
                :class="{'rotate-45': openMenu}"
            ></div>
          </button>

        </div>

      </div>
    </div>
    <div :style="{ height: height + 'px' }"></div>
<!--    <includes-mobile-menu v-if="!largerThanMd" :top="height" :open="openMenu" :menu="menus" />-->
  </div>
</template>

<script lang="ts" setup>
import {MenuEntity} from "~/entities/menu.entity"

const menus = computed<MenuEntity[]>(() => [
  {
    title: 'Home',
    src: '/',
    icon: 'fluent-emoji-flat:beating-heart'
  },
  {
    title: 'About',
    src: '/about',
    icon: 'fluent-emoji-flat:four-leaf-clover'
  },
  {
    title: 'Works',
    src: '/works',
    icon: 'fluent-emoji-flat:bullseye'
  },
  {
    title: 'Services',
    src: '/services',
    icon: 'fluent-emoji-flat:cyclone'
  },
  {
    title: 'Blog',
    src: '/blog',
    icon: 'fluent-emoji-flat:pencil'
  }
])

const downloadResume = () => {
  window.open('/documents/resume.pdf', '_blank')
}

// responsive
const breakpoints = useBreakpoints({
  mini: '640px'
})
const largerThanMd = breakpoints.greater('mini')


// open menu
const openMenu = ref<boolean>(false)

watch(openMenu, (value) => {
  if (value) {
    document.body.style.overflow = 'auto'
  } else {
    document.body.style.overflow = 'hidden'
  }
})

const elRef = ref()
const { height } = useElementSize(elRef)
</script>

<style scoped lang="scss">
h1 {
  font-family: 'Sacramento', cursive;
  font-size: 35px;
  span._icon {
    @apply w-2.5 h-2.5 bg-red-500 inline-block rounded-full;
  }
}
</style>
