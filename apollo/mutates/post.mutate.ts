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
