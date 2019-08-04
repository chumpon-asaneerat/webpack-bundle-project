const path = require('path')

const fontawesome = {
    mode: 'development',
    watch: false,
    entry: {
        fontawesome: './src/dist/font-awesome.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/font-awesome/public'),
        filename: '[name].js'
    },
    devtool: "source-map",
    optimization: {
        minimize: true
    },
    module: {
        rules: [{
            test: /\.js$/i,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-env'] }
            }
        }, {
            // css bundle setup
            test: /\.css$/i,
            exclude: /node_modules/,
            use: [
                // style-loader
                { 
                    loader: 'style-loader',
                    options: { sourceMap: true }
                },
                // css-loader
                {
                    loader: 'css-loader',
                    options: { modules: false, sourceMap: true }
                }
            ]
        }, {
          test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: 'url-loader?limit=10000&mimetype=application/font-woff',
        }, {
          test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
          use: 'file-loader',
        }, {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            'file-loader?name=images/[name].[ext]',
            'image-webpack-loader?bypassOnDebug'
          ]
        }]
    },
    plugins: []
}

module.exports = [fontawesome];