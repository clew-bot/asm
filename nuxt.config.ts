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
    runtimeConfig: {
        MONGO_URI: process.env.MONGO_URI,
        JWT_SECRET: process.env.JWT_SECRET,
      },
    nitro: {
        plugins: ['@/server/db/index.js']
        },
})