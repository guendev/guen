import { defineEventHandler, readBody, setCookie, createError } from 'h3'
import {UserMeta} from "~/entities/auth.entity";
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const runtimeConfig = useRuntimeConfig()

  try {
    const metaData: UserMeta = body.meta

    if(!metaData) {
      return createError({
        status: 401,
        message: 'Unauthorized'
      })
    }

    const { token } = await $fetch<{ token: string }>(new URL('/auth', runtimeConfig.public.apiBackend).href, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${metaData.token}`
      }
    })

    setCookie(event, '_token', token)

    return  {
      token
    }
  } catch (e) {
   //
  }
  return createError({
    status: 401,
    message: 'Unauthorized'
  })
})
