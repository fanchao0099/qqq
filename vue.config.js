module.exports = {
    devServer: {
        proxy: {
            '': {
                target: 'http://127.0.0.1:7001'
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: "@import './src/css/global.scss';"
            }
        }
    }
}