// https://nuxt.com/docs/api/configuration/nuxt-config
// import { nodePolyfills } from 'vite-plugin-node-polyfills'
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['jsonwebtoken']
  },
  // plugins: [
  //   nodePolyfills(),
  // ],
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