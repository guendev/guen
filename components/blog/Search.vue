<template>
  <div
      class="bg-white w-full flex shadow-default rounded-full overflow-hidden px-5 transition hover:shadow-primary-100 text-gray-600"
      @submit.prevent
  >
    <div class="w-full flex items-center">
      <Icon
          name="ri:search-line"
          class="flex-shrink-0 text-[20px] text-gray-500"
      />
      <input
          type="text"
          class="h-full pl-2 focus:outline-0 w-full text-[15px] ml-1"
          placeholder="Keyword..."
      />
    </div>

    <div
        class="md:w-[230px] flex items-center h-[50px] flex-shrink-0 border-l border-gray-100 pl-4"
    >
      <Icon
          name="tabler:category"
          class="flex-shrink-0 text-[20px] text-gray-500"
      />
      <select
          class="h-full pl-1.5 focus:outline-0 w-full text-[14px] ml-1 font-semibold text-gray-500"
      >
        <option :value="null">All</option>
        <option>LGBTQ+</option>
        <option>Information</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped></style>
