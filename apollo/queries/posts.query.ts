import { gql } from '#imports'

export const GET_POSTS = gql`
    query GetPosts($filter: PostsFilter!) {
        posts(filter: $filter) {
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
            createdAt
            views
            slug
            category {
                id
                name
                slug
            }
        }
    }
`

export const GET_POST = gql`
    query AdminGetPost($filter: PostFilter!) {
        post(filter: $filter) {
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
