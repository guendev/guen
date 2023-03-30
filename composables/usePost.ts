import {MaybeRef} from "@vueuse/core";
import {OutputData} from "@editorjs/editorjs";
import {Ref} from "vue";
import {GetPosts_posts} from "~/apollo/queries/__generated__/GetPosts";
import {LocalizationContentInput, LocalizationFieldInput} from "~/apollo/__generated__/serverTypes"

type PostDynamic = Pick<GetPosts_posts, 'title' | 'description' | 'content'>

export const usePost = (post?: MaybeRef<PostDynamic>) => {
    const { locale } = useI18n()
    // convert MaybeRef to Ref
    // @ts-ignore
    const _form: Ref<PostDynamic> = isRef(post) ? post : ref(post || {
        content: {
            en: {},
            jp: {},
            vn: {}
        },
        description: {
            en: '',
            jp: '',
            vn: ''
        },
        title: {
            en: '',
            jp: '',
            vn: ''
        }
    })

    const title = computed<string>({
        get: () => _form.value.title[locale.value as keyof LocalizationContentInput] as string,
        set: (value: string) => {
            _form.value.title[locale.value as keyof LocalizationContentInput] = value
        }
    })
    const description = computed<string>({
        get: () => _form.value.description[locale.value as keyof LocalizationFieldInput] as string,
        set: (value: string) => {
            _form.value.description[locale.value as keyof LocalizationFieldInput] = value
        }
    })

    const content = computed<OutputData>({
        get: () => _form.value.content[locale.value as keyof LocalizationContentInput] as OutputData,
        set: (value: OutputData) => {
            _form.value.content[locale.value as keyof LocalizationContentInput] = value
        }
    })

    const refresh = (_post: MaybeRef<PostDynamic>) => {
        _form.value = isRef(_post) ? _post.value : _post
    }

    return {
        title,
        description,
        content,
        refresh
    }
}
