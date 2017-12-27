const express = require('express')
const webpack = require('webpack')
const app = express()
const webpackConfig = require('./build/webpack.config')

const PORT = 3000

const compiler = webpack(webpackConfig)
app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: '',
    stats: {
        colors: true,
        chunks: false
    }
}))
app.listen(PORT, e => console.log(`server start at ${PORT}`))

