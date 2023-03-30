import { gql } from '#imports'

export const CREATE_POST = gql`
    mutation CreatePost($input: CreatePostInput!) {
        createPost(input: $input) {
            id
            content {
                id
                en
            }
        }
    }
`

export const UPDATE_POST = gql`
    mutation UpdatePost($input: UpdatePostInput!) {
        updatePost(input: $input) {
            id
        }
    }
`
