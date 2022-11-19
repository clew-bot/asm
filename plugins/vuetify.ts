import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css' 
import { aliases } from 'vuetify/iconsets/mdi'
import {mdi} from "vuetify/lib/iconsets/mdi";
export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'dark'
        },
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
            }
        },
    })

    nuxtApp.vueApp.use(vuetify)
})