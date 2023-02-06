import {MaybeRef} from "@vueuse/core";
import {PostEntity} from "~/entities/post.entity"
import {LanguageEntity} from "~/entities/language.entity";
import {OutputData} from "@editorjs/editorjs";
import {Ref} from "vue";

interface Triggers {

}

type PostDynamic = Pick<PostEntity, 'title' | 'description' | 'content'>

export const usePost = (post: MaybeRef<PostDynamic>) => {
    const { locale } = useI18n()


    // convert MaybeRef to Ref
    const _form: Ref<PostDynamic> = isRef(post) ? post : ref(post)

    const title = computed<string>({
        get: () => _form.value.title[locale.value as LanguageEntity],
        set: (val) => _form.value.title[locale.value as LanguageEntity] = val
    })
    const description = computed<string>({
        get: () => _form.value.description[locale.value as LanguageEntity],
        set: (val) => _form.value.description[locale.value as LanguageEntity] = val
    })
    const content = computed<OutputData>({
        get: () => _form.value.content[locale.value as LanguageEntity],
        set: (val) => _form.value.content[locale.value as LanguageEntity] = val
    })

    return {
        title,
        description,
        content
    }
}
