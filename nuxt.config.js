require('dotenv').config()
const appJson = require('./app.json')
const ossPath = `http://serverless-platform.deepexi.top/applications/${appJson.appKey}`
let publicPath = process.env.BUILD_TYPE === 'production' ? ossPath : '/_nuxt/'
module.exports = {
  srcDir: 'src/',
  mode: 'spa',
  router: {
    mode: 'hash'
  },
  /*
   ** Build configuration
   */
  build: {
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
          },
          'vant'
        ]
      ]
    },
    publicPath,
    extends(config){
      
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'x-ua-compatible', content: 'IE=edge, chrome=1' },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href:
          'https://deepexi.oss-cn-shenzhen.aliyuncs.com/deepexi-services/favicon32x32.png'
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#5D81F9'
  },
  /**
   * Share variables, mixins, functions across all style files (no @import needed)
   * @Link https://github.com/nuxt-community/style-resources-module/
   */
  styleResources: {},
  css: [],
  plugins: [{ src: '~plugins/axios' }, { src: '~/plugins/vant' }],
  modules: ['@nuxtjs/axios']
}
