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
                    href: 'https://fonts.googleapis.com/css2?family=Sacramento&display=swap'
                }
            ]
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        '@pinia/nuxt',
        '@vueuse/nuxt',
        'nuxt-icon'
    ]
})
