import VueLottie from '@nguyenshort/vue-lottie'
import {defineNuxtPlugin} from "#imports";

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VueLottie)
})
