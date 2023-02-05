export interface ImageEntity {
    url: string
    path: string
    store: 'firebase' | 'internet'
    createdAt: number
    updatedAt: number
}
