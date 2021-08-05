module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changOringin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
