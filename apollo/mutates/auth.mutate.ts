import { gql } from '#imports'

export const SIGN_IN = gql`
    mutation SignIn($input: SignInInput!) {
        signIn(input: $input)
    }
`
