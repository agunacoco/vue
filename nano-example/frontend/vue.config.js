module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        changeOringin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  outputDir: '../backend/public',

  transpileDependencies: [
    'vuetify'
  ]
}
