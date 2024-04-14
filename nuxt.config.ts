// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxthub/core", "nuxt-auth-utils"],
  // $development: {
  //   hub: {
  //     remote: true
  //   }
  // },
  hub: {
    database: true,
    remote: true
  },
  css: [
    'element-plus/dist/index.css',
  ]
})