import { library, config } from '@/node_modules/@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@/node_modules/@fortawesome/vue-fontawesome'
import { fab } from '@/node_modules/@fortawesome/free-brands-svg-icons'

library.add(fab);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})