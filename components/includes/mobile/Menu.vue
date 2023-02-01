<template>
  <div id="mobile-menu" class="fixed h-full w-full left-0 bg-[#3b65f41c]">
    <div class="bg-white _container px-4">
      <div
          v-for="item in props.menu"
          :key="item.title"
          class="py-2.5 text-gray-700"
      >
        <a>
          <Icon :name="item.icon" class="mr-3 text-[22px]" />
          <span class="text-[14px] text-gray-700">{{ item.title }}</span>
        </a>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {MenuEntity} from "~/entities/menu.entity";

const props = defineProps<{
  top: number
  open: boolean
  menu: MenuEntity[]
}>()

const { height } = useWindowSize()

const maxHeight = computed(() => {
  return (height.value - props.top) + 'px'
})
const top = computed(() => {
  return props.top + 'px'
})
</script>

<style scoped lang="scss">
#mobile-menu {
  max-height: v-bind(maxHeight);
  top: v-bind(top);

  ._container {
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 280px;
  }
}
</style>
