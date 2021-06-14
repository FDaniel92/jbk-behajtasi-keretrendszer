import url from './url.json'
export default {
  env: {
    baseUrl: url[process.env.NODE_ENV].frontend || 'http://0.0.0.0:3000'
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Jogi Behajtási Keretrendszer',
    htmlAttrs: {
      lang: 'hu'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Kezelje a fizetési meghagyások, peres ügyek és végrehajtási eljárások nyilvántartását, nyomon követését a JBK digitális alkalmazásán keresztül!' }
    ],
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=AW-969401949', type: 'text/javascript' },
      { src: 'https://www.google.com/recaptcha/api.js', type: 'text/javascript' },
      { src: 'https://www.google.com/recaptcha/api.js?render=6LewvNYZAAAAAGA0aj5BHZjG1cgNARrqiBhDjoLk', type: 'text/javascript' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/axios',
    { src: '~/plugins/vue-scrollto.js', mode: 'client' },
    { src: '~/plugins/ga.js', mode: 'client' },
    { src: '~/plugins/facebookpixel.js', mode: 'client' },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],

  axios: {
    proxy: false
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxt/components',
    'ejm-lib-marketing/nuxt',
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    analyze: true,
  }
}
