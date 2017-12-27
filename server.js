const express = require('express')
const webpack = require('webpack')
const app = express()
const webpackConfig = require('./build/webpack.config')

const PORT = 3000

Object.entries(webpackConfig.entry).map(([key, val]) => {
    webpackConfig.entry[key] = ['webpack-hot-middleware/client'].concat(val)    
})

webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin())

const compiler = webpack(webpackConfig)

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: '',
    stats: {
        colors: true,
        chunks: false
    }
    // https://webpack.js.org/configuration/stats/#stats
}))
app.use(require('webpack-hot-middleware')(compiler))

app.listen(PORT, e => console.log(`server start at ${PORT}`))

