import {PostEntity} from "~/entities/post.entity";
import {RouteLocationRaw} from "vue-router";

export const useLinkComplex = () => {
    const { locale } = useI18n()
    const nameWithPrefix = (name: string) => `${name}___${locale.value}`

    return {

        home: (): RouteLocationRaw => ({
            name: nameWithPrefix('index')
        }),

        about: (): RouteLocationRaw => ({
            name: nameWithPrefix('about')
        }),

        services: (): RouteLocationRaw => ({
            name: nameWithPrefix('services')
        }),

        blog: (): RouteLocationRaw => ({
            name: nameWithPrefix('blog')
        }),

        blogPost: (post: PostEntity): RouteLocationRaw => ({
            name: nameWithPrefix('blog-id'),
            params: {
                id: post.id
            }
        }),

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
