import {ImageEntity} from "~/apollo/queries/__generated__/ImageEntity";

export const useUpload = () => {
    const runtimeConfig = useRuntimeConfig()
    const authStore = useAuthStore()

    const fetchResult = createEventHook<ImageEntity[]>()
    const fetchError = createEventHook<any>()

    const loading = ref<boolean>(false)
    const upload = async (_: File | File[], group?: string) => {

        loading.value = true

        const files = Array.isArray(_) ? _ : [_]

        const formData = new FormData()
        files.forEach(file => {
            formData.append('images', file)
        })
        group && formData.append('group', group)

        try {
            const res = await $fetch<ImageEntity[]>(new URL('/images', runtimeConfig.public.apiBackend).href, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${authStore.token}`
                },
                body: formData
            })

            fetchResult.trigger(res)

        } catch (e) {
            fetchError.trigger(e)
        }

        loading.value = false
    }

    return {
        upload,
        onResult: fetchResult.on,
        onError: fetchError.on
    }
}
