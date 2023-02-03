import { defineEventHandler, deleteCookie } from 'h3'

export default defineEventHandler(async (event) => {
    deleteCookie(event, '_token')
    return {
        status: 200
    }
})
