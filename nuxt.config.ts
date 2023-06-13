// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    join(currentDir, './assets/styles/base.scss')
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "${join(currentDir, './assets/styles/global.scss')}" as *;`,
        },
      },
    },
  },
})
