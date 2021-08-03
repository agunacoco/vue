module.exports = {
    devServer: {
        proxy: { // 요청할 때마다 서버의 전체 주소를 입력할 필요 없도록 설정.
            '/api': {
                target: 'https://jsonplaceholder.typicode.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },

    transpileDependencies: [
        'vuetify'
    ]
}
