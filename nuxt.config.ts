// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ]
})
