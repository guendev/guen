// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // @ts-ignore
    app: {
        head: {
            title: 'Guen - A queer who wants to bring happiness to everybody.',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { charset: 'utf-8' },
            ],
            link: []
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    // automatically imports `defineStore`
                    'defineStore', // import { defineStore } from 'pinia'
                    // automatically imports `defineStore` as `definePiniaStore`
                    ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
                ],
            },
        ],
        '@vueuse/nuxt',
        'nuxt-icon',
        '@nuxtjs/apollo',
        '@nuxtjs/robots',
        '@nuxt/image-edge',
        '@nuxtjs/google-fonts',
        'nuxt-typed-router'
    ],
    imports: {
        autoImport: true,
        imports: [
            { name: 'useAuth', from: '@vueuse/firebase' },
            { name: 'getDatabase', from: 'firebase/database' },
            { name: 'ref', from: 'firebase/database', as: 'dbRef' },
            { name: 'set', from: 'firebase/database', as: 'dbSet' },
            { name: 'get', from: 'firebase/database', as: 'dbGet' },
            { name: 'onValue', from: 'firebase/database', as: 'dbOnValue' },
            { name: 'getAuth', from: '@firebase/auth' },
            { name: 'useRTDB', from: '@vueuse/firebase/useRTDB' },
            { name: 'useFirestore', from: '@vueuse/firebase/useFirestore' },
            // firestore
            { name: 'getStorage', from: 'firebase/storage' },
            { name: 'ref', from: 'firebase/storage', as: 'fsRef' },
            { name: 'uploadBytes', from: 'firebase/storage', as: 'fsUploadBytes' },
            { name: 'getDownloadURL', from: 'firebase/storage', as: 'fsGetDownloadURL' },
            // firedatabase
            { name: 'setDoc', from: 'firebase/firestore', as: 'fsSetDoc' },
            { name: 'getDoc', from: 'firebase/firestore', as: 'fsGetDoc' },
            { name: 'doc', from: 'firebase/firestore', as: 'fsDocInstance' },
            { name: 'getFirestore', from: 'firebase/firestore' },
            { name: 'collection', from: 'firebase/firestore', as: 'fsCollection' },
            { name: 'deleteDoc', from: 'firebase/firestore', as: 'fsDeleteDoc' },
        ]
    },
    i18n: {
        locales: [
            {
                code: 'en',
                file: 'en-US.json'
            },
            {
                code: 'vi',
                file: 'vi-VI.json'
            },
            {
                code: 'jp',
                file: 'jp-JP.json'
            }
        ],
        lazy: true,
        langDir: 'lang',
        defaultLocale: 'en'
    },
    googleFonts: {
        families: {
            Caveat: true,
            Sacramento: true,
            'Nunito+Sans': [400, 500, 600, 700, 800],
        }
    },
    apollo: {
        clients: {
            default: {
                httpEndpoint: '/graphql'
            }
        },
    },
    runtimeConfig: {
        // Private config that is only available on the server
        apiSecret: process.env.NUXT_API_SECRET,
        // Config within public will be also exposed to the client
        public: {
            apiBase: '/api',
            apiGraphQL: process.env.NUXT_PUBLIC_APOLLO_ENDPOIT,
            apiBackend: process.env.NUXT_PUBLIC_BACKEND_ENDPOIT,
        }
    },
    // extend route
})
