import { gql } from '#imports'

export const GET_POSTS = gql`
    query GetPosts($filter: PostsFilter!) {
        posts(filter: $filter) {
            id
            title {
                en
                id
            }
        }
    }
`
