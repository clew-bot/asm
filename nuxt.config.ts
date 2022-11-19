import vuetify from 'vite-plugin-vuetify'

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
    modules: [
        '@nuxtjs/tailwindcss', 
      ],
})