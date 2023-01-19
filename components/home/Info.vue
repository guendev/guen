<template>
  <div class="w-1/2 h-[calc(100vh-70px)] flex flex-col">

    <div class="text-[45px] font-extrabold text-gray-800 leading-none mt-14">

      <div class="flex items-center">


        <div class="mr-4">
          Hi! I'm
        </div>

        <button class="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-5 py-3 flex justify-center items-center rounded-full shadow-default shadow-primary-300">
          <span class="text-[15px] uppercase font-semibold">Developer</span>
        </button>

      </div>

      <div class="mt-3">
        Tran Cong Nguyen

        <span class="w-2.5 h-2.5 bg-red-500 inline-block rounded-full -ml-1"></span>

      </div>

    </div>


    <div class="my-9 text-gray-800">
      Strange developing for over <b>four years</b>
      <br />
      as a queer developer.
    </div>

    <div class="flex items-center">

      <button class="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-5 py-2.5 flex justify-center items-center shadow-default shadow-rose-300">
        <span class="text-[15px] font-semibold">Hire Me</span>
      </button>

      <button class="ml-7 font-bold text-gray-800">
        Projects

        <Icon class="text-[18px]" name="material-symbols:arrow-outward-rounded" />

      </button>

    </div>

    <div class="my-10 flex">

      <div>
        <div class="font-bold text-[25px] text-gray-900">
          +30
        </div>

        <div class="text-sm font-semibold mt-1">
          Clients worldwide
        </div>
      </div>

      <div class="ml-20">
        <div class="font-bold text-[25px] text-gray-900">
          Contact
        </div>

        <div class="leading-5 text-sm font-semibold mt-1">
          contact@guen.dev
        </div>
      </div>


    </div>


    <div class="w-full h-full bg-stone-800 text-gray-100 px-6 flex w-full items-center">

      <div class="flex-shrink-0">
        <div class="text-[16px] font-semibold">
          Career Path
          <br />
          2023
        </div>
        <button class="bg-gradient-to-r from-orange-400 to-orange-500 px-5 py-2 flex justify-center items-center mt-3">
          <span class="text-[14px] font-semibold">Know More</span>
        </button>
      </div>


      <div class="ml-16 w-full mr-12">

        <div class="text-sm">
          <div
              v-for="count in counters"
              :key="count.title"
              class="flex items-center justify-between py-2 border-b border-stone-700"
          >

            <span>{{ count.title }}</span>

            <span>{{ count.count }}</span>

          </div>
        </div>

      </div>

    </div>


  </div>
</template>

<script lang="ts" setup>

const counters = computed(() => [
  {
    title: 'Web Application',
    count: 30,
  },
  {
    title: 'Mobile Application',
    count: 20,
  },
  {
    title: 'Others',
    count: 4,
  },
])

</script>

<style scoped></style>
