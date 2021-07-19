const {
    VueLoaderPlugin
} = require('vue-loader');
//노드 환경에서는 require쓰고, 뷰 환경에서는 import를 사용
const path = require('path');

module.exports = { // 노드의 모듈을 만들었다. 
    // 웹팩을 쓰는 이유: 스크립트가 너무 많아져서 한꺼번에 모아서 쓰기 위해서, 웹팩은 자바스크립트만 받는다.
    // 기본 구조 
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue']
    },
    entry: { //스크립트를 하나로 합칠 파일. 가장 대표가 되는 파일.
        use: './main.js', // app 이름은 마음대로 정해도 상관X.
    },
    module: {
        rules: [{ // 합칠 때 어떻게 합칠지에 대한 기본 룰. 웹팩은 자스만 처리하는데 자스가 아닌 것이 있을 때 처리할 방법.
            test: /\.vue$/, // .vue로 끝나는 파일 
            use: 'vue-loader' // 자스가 아닌 vue 파일을 vue.loader가 처리하도록 설정.
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: 'app.js', // entry의 app 
        path: path.join(__dirname, 'dist'), // 현재 폴더 안에 들어있는 파일.(폴더 경로), dist 폴더 안에 app 파일이 생긴다.
    }
};