<template>
  <div class="flex -m-3">
    <div
        v-for="item in categories"
        :key="item"
        class="p-3"
    >
      <button
          class="flex items-center px-4 py-1.5 rounded-md border-2 transition"
          :class="{
            'border-primary-500 shadow-primary-300 bg-primary-100 text-primary shadow-md': _value === item.id,
            'border-transparent bg-gray-100 text-gray-500': _value !== item.id,
          }"
          @click.prevent="_value = item.id"
      >
        {{ item.name }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {GET_CATEGORIES} from "~/apollo/queries/categories.query";
import {Categories, Categories_categories, CategoriesVariables} from "~/apollo/queries/__generated__/Categories"

const props = defineProps<{
  value: string
}>()
const _value = ref(props.value)
watch(() => props.value, (value) => {
  _value.value = value
})

//define emits for v-model
const emits = defineEmits<{
  (event: 'update:value', value: string): void
}>()

watch(_value, (value) => {
  emits('update:value', value)
})

const {result} = useQuery<Categories, CategoriesVariables>(GET_CATEGORIES, {
  filter: {}
})
const categories = computed<Categories_categories[]>(() => result.value?.categories || [])
</script>

<style scoped></style>
