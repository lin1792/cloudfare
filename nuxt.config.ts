// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxthub/core","nuxt-auth-utils"],
  hub: {
    database: true,
  },
  css: [
    'element-plus/dist/index.css',
  ]
})