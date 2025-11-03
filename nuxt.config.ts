// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
})

// TODO: TROCAR AS IMAGENS DEPOIS PDO NuxtImg
// Ex: 
// <NuxtImg src="/images/logo.png" width="200" height="100" />
