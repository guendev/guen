import { defineEventHandler, readBody, setCookie, createError } from 'h3'
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    const { token } = body

    if (!token) {
      return createError({
        status: 401,
        message: 'Unauthorized'
      })
    }

    setCookie(event, '_token', token, {
      httpOnly: true
    })

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
