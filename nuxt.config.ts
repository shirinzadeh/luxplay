// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/content',
    '@vee-validate/nuxt','nuxt-security'
    // ['nuxt-security', {
    //   'navigate-to': ["'self'", 'https://www.crownhotels.com.au', 'https://www.thedarling.com.au', 'https://www.star.com.au', 'https://wrestpoint.com.au', 'https://www.crownmelbourne.com.au'],
    //   'form-action': ["'self'"],
    //   'base-uri': ["'self'"]
    // }],
  ],
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        // { rel: 'manifest', href: '/site.webmanifest' },
      ],
    }
  },
  css: [
    '~/assets/css/main.css'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  tailwindcss: {
    config: {
      darkMode: 'class',
      content: [
        'content/**/**.md'
      ]
    }
  },
  image: {
    quality: 80,
    format: ['webp']
  },
  content: {
    // Content module configuration
    highlight: {
      theme: 'dracula'
    }
  },
  veeValidate: {
    // Add desired configurations here
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },


})