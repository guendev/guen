import {ImageEntity} from "~/entities/image.entity";

export const useUpload = () => {
    const preview = async (path: string, store: ImageEntity['store']) => {
        return fsGetDownloadURL(fsRef(getStorage(), path))
    }

    const toFireStore = async (file: File, folder: string): Promise<ImageEntity> => {
        const createdAt = Date.now()
        const res = await fsUploadBytes(fsRef(getStorage(), `/${folder}/${createdAt}`), file)
        const url = await preview(res.metadata.fullPath, 'firebase')
        return {
            url,
            path: res.metadata.fullPath,
            store: 'firebase',
            createdAt,
            updatedAt: Date.now()
        }
    }

    return {
        toFireStore,
        preview
    }
}
