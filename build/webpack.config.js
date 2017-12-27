const HtmlPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        foo: pathResolve('../src/entry/foo.js'),
        bar: pathResolve('../src/entry/bar.js')
    },
    output: {
        path: pathResolve('../dist'),
        filename: '[name].js'
    },
    plugins: [
        new HtmlPlugin({
            title: 'foo',
            template: pathResolve('../src/template/index.tpl.html'),
            filename: 'foo.html',
            chunks: ['foo']
        }),
        new HtmlPlugin({
            title: 'bar',
            template: pathResolve('../src/template/index.tpl.html'),
            filename: 'bar.html',
            chunks: ['bar']
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}

function pathResolve(p) {
    return path.resolve(__dirname, p)
}