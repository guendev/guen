<template>

  <div class="flex flex-wrap">

    <div
        v-for="(service, index) in services"
        :key="index"
        class="w-full small:w-1/2 semi:w-1/3 flex items-center justify-center flex-col py-7 opacity-0"
        ref="items"
    >

      <div class="w-20">
        <img class="w-full h-full object-cover transition transform hover:scale-110" :src="service.image" alt="">
      </div>

      <h2 class="text-[17px] font-semibold capitalize text-gray-700 mt-1">
        {{ service.name }}
      </h2>

    </div>

  </div>

</template>

<script lang="ts" setup>
import {ServiceEntity} from "~/entities/service.entity";
import {useNuxtApp} from "#imports";

const services = ref<ServiceEntity[]>([
  {
    id: 1,
    name: 'Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur.',
    image: '/images/services/website.png'
  },
  {
    id: 1,
    name: 'Mobile Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur.',
    image: '/images/services/mobile-application.png'
  },
  {
    id: 1,
    name: 'Online Marketing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur.',
    image: '/images/services/seo.png'
  },
  {
    id: 1,
    name: 'Social Media Strategy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur.',
    image: '/images/services/fanpage.png'
  },
  {
    id: 1,
    name: 'SEO Optimization',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur.',
    image: '/images/services/rocket.png'
  },
  {
    id: 1,
    name: 'Content creation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur.',
    image: '/images/services/news.png'
  }
])

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

<style scoped></style>
