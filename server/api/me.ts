import { defineEventHandler, getHeader, createError, deleteCookie } from 'h3'

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()

  const token = getHeader(event, 'Authorization')

  if (!token) {
    return createError({
      statusCode: 401,
      message: 'Unauthorized'
    })
  } else {

    try {
      const user = await $fetch<{ token: string }>(new URL('/auth', runtimeConfig.public.apiBackend).href, {
        headers: {
          Authorization: token
        }
      })

      deleteCookie(event, '_token')

      return {
        user,
        token
      }
    } catch (e) {
      return createError({
        statusCode: 401,
        message: 'Unauthorized'
      })
    }

  }
})
