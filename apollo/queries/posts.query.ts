import { gql } from '#imports'

export const GET_POSTS = gql`
    query GetPosts($filter: PostsFilter!) {
        posts(filter: $filter) {
            id
            title {
                id
                en
                jp
                vn
            }
            description {
                id
                en
                jp
                vn
            }
            content {
                id
                en
                jp
                vn
            }
            avatar {
                id
                path
                storage
            }
        }
    }
`
