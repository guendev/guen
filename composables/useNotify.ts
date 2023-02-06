interface IProps<T> {
    chanel?: string
    onReceive?: (data: T) => void
}

export const useNotify = <T extends any>(props?: IProps<T>) => {
    const {
        isSupported,
        data,
        post,
        error
    } = useBroadcastChannel<T, T>({ name: props?.chanel || 'notify' })

    watch(data, (value) => props?.onReceive?.(value))

    return {
        isSupported,
        data,
        fire: (data: T) => post(data),
        error
    }
}
