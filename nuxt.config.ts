// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxthub/core", "nuxt-auth-utils",'@nuxtjs/stylelint-module'],
  $development: {
    hub: {
      database: true,
      remote: true
    }
  },
  hub: {
    database: true,
    // remote: true
  },
  css: [
    'element-plus/dist/index.css',
  ],
  nitro: {
    experimental: {
      // Enable Server API documentation within NuxtHub
      openAPI: true
    }
  },
  // runtimeConfig: {
  //   workerApiUrl: process.env.WORKER_API_URL || 'https://my-worker.1792048892.workers.dev',
  // },
})