<template>
  <Teleport to="body">
    <div class="fixed bottom-10 right-10">

      <div>
        <div
            v-for="(flag, index) in flags"
            :key="flag"
            class="mb-4 last:mb-0"
        >
          <button
              class="shadow-default rounded-full bg-white border-2 border-white transition transform duration-300 ease-in-out"
              :class="{
                'opacity-60 scale-95': index !== 0
              }"
          >
            <Icon
                :name="flag"
                class="w-10 h-10"
            />
          </button>
        </div>

        <slot></slot>

      </div>

    </div>
  </Teleport>
</template>

<script lang="ts" setup>
// a lag array of vietNam, Japan and USA following emojione:flag-for-* format
const flags = ref<string[]>(['emojione:flag-for-vietnam', 'emojione:flag-for-japan', 'emojione:flag-for-united-states'])
</script>

<style scoped></style>
