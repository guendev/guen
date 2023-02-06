// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Guen - A queer who wants to bring happiness to everybody.',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { charset: 'utf-8' },
            ],
            link: [
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com'
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                    crossorigin: ""
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,400i,500,600,700'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Sacramento&display=swap'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Sacramento&display=swap'
                }
            ]
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
        'nuxt-icon'
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
    // extend route
})
