<template>
  <div>
    <form>
      <input
          type="text"
          class="w-full py-2.5 focus:outline-none text-[22px] border-b font-semibold pr-5 placeholder-gray-400 placeholder:font-normal"
          placeholder="Post name"
      />

      <div class="mt-7 flex">

        <div class="h-[160px] w-[266px] bg-gray-100 rounded-md relative text-gray-400">

          <Icon class="text-[35px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" name="ri:upload-cloud-line" />

        </div>

        <textarea
            class="h-[160px] w-[320px] bg-gray-100 rounded-md relative text-gray-500 ml-7 focus:outline-0 p-4 text-[15px]"
            placeholder="Post description"
        ></textarea>

        <div class="ml-7">

          <ul>
            <li
                v-for="item in categories"
                :key="item"
                class="mb-5 last:mb-0"
            >
              <button
                  class="flex items-center"
                  @click.prevent="category = item"
              >
              <span
                  class="w-6 h-6 bg-gray-100 rounded-lg border-2 transition flex justify-center items-center"
                  :class="{
                    'border-primary-600': item === category,
                    'border-transparent': item !== category
                  }"
              >
                <Icon
                    name="material-symbols:check-small-rounded"
                    class="text-[20px] text-primary-600 transform transition duration-300"
                    :class="{
                    'scale-0': item !== category
                  }"
                />
              </span>
                <span class="ml-3 text-[15px]">{{ item }}</span>
              </button>
            </li>
          </ul>

        </div>

      </div>

      <client-only>
        <admin-creator-editor class="mt-7" />
      </client-only>

    </form>

    <includes-languager />

  </div>
</template>

<script lang="ts" setup>

const categories = ref<string[]>(['LGBTQ+', 'Foreign Language', 'Javascript', 'Swift'])

const category = ref<string>('')

</script>

<style scoped></style>
