// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      title: 'ngmusic',
      meta: [
        {
          name: 'description',
          content: 'Explore your popular music'
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
    'nuxt-primevue',
    'nuxt-lazy-load'
  ],
  lazyLoad: {
    images: true,
    directiveOnly: false,
    
    // Default image must be in the public folder
    defaultImage: '/no-image.jpg',
  
    // To remove class set value to false
    loadingClass: 'isLoading',
    loadedClass: 'isLoaded',
    appendClass: 'lazyLoad',
    
    observerConfig: {
      // See IntersectionObserver documentation
    }
  },
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
  },
  build: {
    transpile: ['lodash-es'],
  }
})
