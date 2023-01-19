<template>
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
