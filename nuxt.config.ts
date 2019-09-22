import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
  mode: 'universal',
  // change host name for Docker
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: "Kazuki's Blog",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  srcDir: 'src/',
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/constants-inject.ts',
    '@/plugins/i18n.ts',
    '@/plugins/font-awesome'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api/': {
      target: 'localhost:3000',
      pathRewrite: {'^/api/': '/api'}
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}

module.exports = config
