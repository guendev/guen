<template>
  <div class="max-w-bootstrap mx-auto h-[70px] border-b flex items-center">

    <h1 class="mr-auto">
      Guen
      <span></span>
    </h1>

    <ul class="flex items-center font-medium">
      <li v-for="menu in menus" :key="menu.title" class="ml-6 first:ml-0">
        <a :href="menu.href" class="px-2 py-1 hover:bg-gray-100 rounded">
          {{ menu.title }}
        </a>
      </li>

      <li class="ml-6">
        <a class="text-[25px]" href="https://github.com/nguyenshort" target="_blank">
          <Icon name="eva:github-fill" />
        </a>
      </li>

    </ul>

    <button
        class="ml-7 bg-gradient-to-r from-primary-50 to-primary-100 text-primary uppercase px-5 py-1.5 flex justify-center items-center rounded-full border-2 border-primary"
        @click="downloadResume"
    >
      <Icon class="text-[18px]" name="line-md:downloading-loop" />
      <span class="text-[12px] ml-1.5 font-semibold">Resume</span>
    </button>

  </div>
</template>

<script lang="ts" setup>

const menus = computed(() => [
  {
    title: 'Home',
    src: '/'
  },
  {
    title: 'About',
    src: '/about'
  },
  {
    title: 'Works',
    src: '/works'
  },
  {
    title: 'Services',
    src: '/services'
  },
  {
    title: 'Blog',
    src: '/blog'
  }
])

const downloadResume = () => {
  window.open('/documents/resume.pdf', '_blank')
}

</script>

<style scoped lang="scss">
h1 {
  font-family: 'Sacramento', cursive;
  font-size: 35px;
  span {
    @apply w-2.5 h-2.5 bg-red-500 inline-block rounded-full;
  }
}
</style>
