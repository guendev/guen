import { gql } from '#imports'

export const CREATE_POST = gql`
    mutation CreatePost($input: CreatePostInput!) {
        createPost(input: $input) {
            id
            slug
        }
    }
`

export const UPDATE_POST = gql`
    mutation UpdatePost($input: UpdatePostInput!) {
        updatePost(input: $input) {
            id
            title {
                id
                en
                jp
                vi
            }
            description {
                id
                en
                jp
                vi
            }
            content {
                id
                en
                jp
                vi
            }
            avatar {
                id
                path
                storage
            }
            category {
                id
                name
                slug
            }
        }
    }
`

export const REMOVE_POST = gql`
    mutation RemovePost($input: RemovePostInput!) {
        removePost(input: $input) {
            id
        }
    }
`
