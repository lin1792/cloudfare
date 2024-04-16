// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['jsonwebtoken']
  },
  modules: ["@nuxthub/core", "nuxt-auth-utils",'@nuxtjs/stylelint-module'],
  $development: {
    hub: {
      remote: true
    }
  },
  hub: {
    database: true
    // remote: true
  },
  css: [
    'element-plus/dist/index.css',
  ]
})