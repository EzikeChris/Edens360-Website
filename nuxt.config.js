export default {
  ssr: false,
  head: {
    title: 'Welcome to Edens360',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', type: 'text/css', href: 'https://eden-bootstrap.netlify.app/css/jardin.css'},
    ],
    script: [
      // { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js", async: true, defer: true },
    ]
  },
  css: [],
  plugins: [
    {
      src: '~/plugins/marquee.js',
      mode: 'client'
    }
  ],
  components: [
    '~/components/',
  ],
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxt/content',
  ],
  publicRuntimeConfig: {},
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  content: {},
  build: {}
}
