import {ApolloLink, createHttpLink} from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';

export default defineNuxtPlugin((nuxtApp) => {
    // Get Nuxt runtimeConfig and apollo instance
    const runtimeConfig = useRuntimeConfig()
    const { $apollo } = useNuxtApp()

    const roundTripLink = new ApolloLink((operation, forward) => {
        // Called before operation is sent to server
        operation.setContext({ start: Date.now() })
        return forward(operation).map((data) => {
            // Called after server responds
            const time = Date.now() - operation.getContext().start
            console.log(
                `Operation: ${operation.operationName} took ${time} to complete`
            )
            return data
        })
    })

    // HTTP connection to the API
    const httpLink = createHttpLink({
        // You should use an absolute URL here
        uri: runtimeConfig.public.apiGraphQL
    })

    const authLink = setContext((_, { headers }) => {
        // const useUser = useUserStore()
        // return the headers to the context so httpLink can read them
        return {
            headers: {
                ...headers,
                authorization: `Bearer __`
            }
        }
    })

    const errorLink = onError((err) => {
        nuxtApp.callHook('apollo:error', err).then(r => r)
        // if (graphQLErrors) {
        //     graphQLErrors.forEach(
        //         ({ message, extensions }) => {
        //             console.log(
        //                 `[GraphQL error]: Message: ${message}, Code: ${extensions.category}`
        //             )
        //             const useUser = useUserStore()
        //             switch (extensions.category) {
        //                 case 'authentication':
        //                     notify.error('Phiên đăng nhập đã kết thúc').then(() => {
        //                         window.$vue._context.provides.$cookies.remove('_token')
        //                         useUser.logout()
        //                         window.location.reload()
        //                     })
        //             }
        //         }
        //         // Xoá cookie, đăng xuất, login
        //     )
        // }
        // if (networkError) {
        //     console.log(`[Network error]: ${networkError}`)
        // }
    })

    // Set custom links in the apollo client (in this case, the default apollo client)
    $apollo.defaultClient.setLink(roundTripLink.concat(errorLink.concat(authLink.concat(httpLink))))

    // error
    nuxtApp.hook('apollo:error', (error) => {
        console.error(error)
    })
})
