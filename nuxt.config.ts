// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
export default defineNuxtConfig({
    css: ['vuetify/styles', '@/assets/css/styles.css'],
    vite: {
        // @ts-ignore
        ssr: {
            noExternal: ['vuetify'], // add the vuetify vite plugin
        },
    },
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
    build: {
        transpile: ['@vuepic/vue-datepicker']
    },
    runtimeConfig: {
        MONGO_URI: process.env.MONGO_URI,
        JWT_SECRET: process.env.JWT_SECRET,
        public: {
            IMAGE_TOKEN: process.env.VUE_APP_IMAGE_TOKEN,
        }
      },
    nitro: {
        plugins: ['@/server/db/index.js']
        },
})