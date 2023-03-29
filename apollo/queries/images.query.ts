import { gql } from '#imports'

export const IMAGE_DOCUMENT = gql`
    fragment ImageEntity on Image {
        createdAt
        height
        id
        mimetype
        path
        size
        storage
        updatedAt
        width
    }
`
