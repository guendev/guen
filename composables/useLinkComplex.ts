import {PostEntity} from "~/entities/post.entity";
import {RouteLocationRaw} from "vue-router";

export const useLinkComplex = () => {
    const { locale } = useI18n()
    const nameWithPrefix = (name: string) => `${name}___${locale.value}`

    return {

        admin: {
            post: (post: PostEntity): RouteLocationRaw => ({
                name: nameWithPrefix('admin-posts-id'),
                params: {
                    id: post.id
                }
            }),
            posts: (): RouteLocationRaw => ({
                name: nameWithPrefix('admin-posts')
            }),
            postCreate: (): RouteLocationRaw => ({
                name: nameWithPrefix('admin-creator-post')
            })
        }

    }
}
