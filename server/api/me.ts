import { defineEventHandler, getHeader, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()

  try {
    const token = getHeader(event, 'Authorization')

    if (!token) {
      return createError({
        statusCode: 401,
        message: 'Unauthorized'
      })
    }

    const user = await $fetch<{ token: string }>(new URL('/auth', runtimeConfig.public.apiBackend).href, {
      headers: {
        Authorization: token
      }
    })

    return {
        user
    }

  } catch (e) {
      //
  }
  return createError({
    statusCode: 401,
    message: 'Unauthorized'
  })
})
