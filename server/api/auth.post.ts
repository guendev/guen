import { defineEventHandler, readBody, setCookie, createError } from 'h3'
import jwt from 'jsonwebtoken'
import {UserMeta} from "~/entities/auth.entity";
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {

    const metaData: UserMeta = body.meta

    if(!metaData) {
      return createError({
        status: 401,
        message: 'Unauthorized'
      })
    }
    const jwtToken = jwt.sign(metaData, 'secret')
    setCookie(event, '_token', jwtToken)
    return  {
      token: jwtToken
    }
  } catch (e) {
    console.log(e)
   //
  }
  return createError({
    status: 401,
    message: 'Unauthorized'
  })
})
