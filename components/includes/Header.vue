<template>
  <div class="fixed w-full top-0 shadow-default z-50 h-[70px] bg-white">
    <div class="max-w-bootstrap mx-auto lg:px-0 px-5">
      <div class="flex items-center h-[70px]">

        <nuxt-link to="/">
          <h1 class="flex">
            <span>Guen</span>
          </h1>
        </nuxt-link>

        <div class="mr-auto ml-3">
          <img width="25" src="/images/lgbt.png" alt="" />
        </div>

        <ul class="items-center font-medium hidden semi:flex">
          <li
              v-for="menu in menus"
              :key="menu.title"
              ref="items"
              class="ml-6 first:ml-0 opacity-0"
          >
            <nuxt-link
                :to="menu.src"
                class="px-2 py-1 transition duration-300 ease-in-out hover:text-primary-500"
                active-class="font-semibold text-primary-500"
            >
<!--              <Icon v-if="$route.path === menu.src" :name="menu.icon" />-->
              {{ menu.title }}
            </nuxt-link>
          </li>
        </ul>

        <div id="header-actions" class="flex items-center"></div>

        <button
            v-if="!$route.path.match(/^\/admin/)"
            class="semi:hidden"
            @click="openMenu = !openMenu"
        >
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
</template>

<script lang="ts" setup>
import {MenuEntity} from "~/entities/menu.entity"
import {useNuxtApp} from "#imports";

const link = useLinkComplex()

const menus = computed<MenuEntity[]>(() => [
  {
    title: 'Home',
    src: link.home(),
    icon: 'fluent-emoji-flat:beating-heart'
  },
  {
    title: 'About',
    src: link.about(),
    icon: 'fluent-emoji-flat:four-leaf-clover'
  },
  // {
  //   title: 'Works',
  //   src: '/works',
  //   icon: 'fluent-emoji-flat:bullseye'
  // },
  {
    title: 'Services',
    src: link.services(),
    icon: 'fluent-emoji-flat:cyclone'
  },
  {
    title: 'Blog',
    src: link.blog(),
    icon: 'fluent-emoji-flat:pencil'
  }
])
// open menu
const openMenu = ref<boolean>(false)

watch(openMenu, (value) => {
  if (value) {
    document.body.style.overflow = 'auto'
  } else {
    document.body.style.overflow = 'hidden'
  }
})

const items = ref<HTMLElement[]>([])

const { $anime } = useNuxtApp()

onMounted(() => {
  $anime({
    targets: items.value,
    scale: [0.9, 1],
    // transform vertical
    translateY: [-20, 0],
    opacity: 1,
    delay: $anime.stagger(150)
  })
})
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
