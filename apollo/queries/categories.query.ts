import { gql } from '#imports'

export const GET_CATEGORIES = gql`
    query Categories($filter: GetCategoriesFilter!) {
        categories(filter: $filter) {
            id
            name
        }
    }
`
