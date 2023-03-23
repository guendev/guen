import {ApolloLink, createHttpLink} from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import {NotifyEntity, NotifyType} from "~/entities/notify.entity";

export default defineNuxtPlugin((nuxtApp) => {
    // Get Nuxt runtimeConfig and apollo instance
    const runtimeConfig = useRuntimeConfig()
    const { fire } = useNotify<NotifyEntity>()
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
        const authStore = useAuthStore()
        return {
            headers: {
                ...headers,
                authorization: `Bearer ${authStore.token}`
            }
        }
    })

    const errorLink = onError((err) => {
        nuxtApp.callHook('apollo:error', err).then(r => r)
    })

    // Set custom links in the apollo client (in this case, the default apollo client)
    // @ts-ignore
    $apollo.defaultClient.setLink(roundTripLink.concat(errorLink.concat(authLink.concat(httpLink))))

    // error
    nuxtApp.hook('apollo:error', (error) => {
        if (!process.server && error.graphQLErrors?.[0].message) {
            fire({
                message: error.graphQLErrors?.[0].message,
                type: NotifyType.ERROR
            })
        }
    })
})
