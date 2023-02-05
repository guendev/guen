<template>
  <Teleport to="body">
    <div class="fixed bottom-10 right-10">

      <div>
        <div
            v-for="flag in flags"
            :key="flag.key"
            class="mb-4 last:mb-0"
        >
          <button
              class="shadow-default rounded-full bg-white border-2 border-white transition transform duration-300 ease-in-out"
              :class="{
                'opacity-60 scale-95': locale !== flag.key
              }"
              @click="changeLang(flag.key)"
          >
            <Icon
                :name="flag.icon"
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
const flags = ref([
  {
    icon: 'emojione:flag-for-vietnam',
    key: 'vi'
  },
  {
    icon: 'emojione:flag-for-japan',
    key: 'jp'
  },
  {
    icon: 'emojione:flag-for-united-states',
    key: 'en'
  }
])

const { locale, setLocale } = useI18n()

const changeLang = (lang: string) => {
  setLocale(lang)
}
</script>

<style scoped></style>
