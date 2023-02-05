import {LanguageEntity} from "~/entities/language.entity";
import {OutputData} from "@editorjs/editorjs";
import {ImageEntity} from "~/entities/image.entity";

export interface PostEntity {
    id: number;
    title: Record<LanguageEntity, string>
    content: Record<LanguageEntity, OutputData>
    description: Record<LanguageEntity, string>
    image: ImageEntity;
    category: string
    createdAt: number;
}

export type PostForm = Omit<PostEntity, 'id' | 'createdAt'>

export const PostEntityDefault: PostForm = {
    title: {
        en: '',
        vi: '',
        jp: ''
    },
    content: {
        en: {
            blocks: []
        },
        vi: {
            blocks: []
        },
        jp: {
            blocks: []
        }
    },
    description: {
        en: '',
        vi: '',
        jp: ''
    },
    category: '',
    image: {
        url: '',
        path: '',
        store: 'firebase',
        createdAt: 0,
        updatedAt: 0
    }
}