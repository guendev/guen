import {defineNuxtPlugin} from "#imports"
import anime from 'animejs'
export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            anime
        }
    }
})
