import { defineEventHandler, getHeader, createError } from 'h3'
import jwt from 'jsonwebtoken'
import {UserMeta} from "~/entities/auth.entity";

export default defineEventHandler(async (event) => {
  try {
    const token = getHeader(event, 'Authorization')
    if (!token) {
      return createError({
        statusCode: 401,
        message: 'Unauthorized'
      })
    }

    const payload = jwt.verify(token.split(' ')[1], 'secret')
    return {
        user: payload as UserMeta
    }

  } catch (e) {
      //
  }
  return createError({
    statusCode: 401,
    message: 'Unauthorized'
  })
})
