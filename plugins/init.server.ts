import { getCookie } from 'h3'

export default defineNuxtPlugin(async (nuxtApp) => {
  const authStore = useAuthStore()

  const token = getCookie(useRequestEvent(), '_token')

  if(token && process.server) {


      try {
          const { user } = await $fetch('/api/me', {
              headers: {
                  Authorization: 'Bearer ' + token
              }
          })

          if(user) {
              // @ts-ignore
              authStore.user = user
              authStore.token = token
          }

      } catch (e) {
          console.log(e)
          //
      }
  }

  nuxtApp.hooks.hook('app:created', async () => {
    //
  })
})
