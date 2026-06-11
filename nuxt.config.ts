// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  app: {
    head: {
      title: 'Ivan Loreña | Frontend Developer',
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/png', href: '/img/favicon.png' },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Ivan Loreña — Frontend Developer portfolio' },
      ],
    },
  },

  googleFonts: {
    families: {
      'M PLUS 1': [400, 500, 600, 700],
    },
    display: 'swap',
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
})
