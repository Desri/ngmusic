// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'ngmusic',
      meta: [
        {
          name: 'description',
          content: 'popular music'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      API_ENDPOINT: process.env.BASE_URL_V1
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxt/eslint',
    'nuxt-primevue'
  ],
  primevue: {
    usePrimeVue: true
  },
  eslint: {
    config: {
      stylistic: true
    }
  },
  tailwindcss: {
    configPath: 'tailwind.config',
    exposeConfig: true,
    config: {},
    viewer: true
  },
  css: [
    'primevue/resources/themes/aura-light-indigo/theme.css',
    '~/assets/scss/style.scss'
  ],
  image: {
    dir: 'assets/img'
  }
})
