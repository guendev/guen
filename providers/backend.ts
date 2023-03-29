import type { ProviderGetImage } from '@nuxt/image-edge'
import { joinURL, withHttp, withHttps } from 'ufo'
export const getImage: ProviderGetImage = (src: string, { modifiers, baseURL } = {}, { options, $img }) => {
    return {
        url: joinURL(baseURL, src)
    }
}
