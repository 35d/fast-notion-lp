import Sass from 'sass'
import Fiber from 'fibers'

const scss = {
  implementation: Sass,
  sassOptions: {
    fiber: Fiber
  }
}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Fast Notion Web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/helper.scss',
    '@/assets/css/default.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // SEE https://composition-api.nuxtjs.org/getting-started/setup
    '@nuxtjs/composition-api/module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://portal-vue.linusb.org/guide/installation.html#nuxt-module
    'portal-vue/nuxt'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    build: {
      loaders: {
        scss
      }
    }
  }
}
