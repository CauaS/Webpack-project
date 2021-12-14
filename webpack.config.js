const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    //para rodar em dev (preview)
    devServer:{
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        open: true,
        hot: true,
    },
    devtool: 'inline-source-map',
    //plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: "Olá, aqui está o título!",
            filename: "app.html",
            template: path.resolve(__dirname, 'src/index.html')
        })
    ],
    //loaders
    module: {
        rules: [
            //css
            { test: /\^.css$/, 
              use: ['style-loader', 'css-loader']
            },
            //images
            { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, 
              type: 'asset/resources'
            },
            //js
            { test: /\^.js$/, 
              exclude: /node_modules/, 
              use: {
                  loader: 'babel-loader', 
                  options: { 
                      presets: ['@babel/preset-env'] 
                    }
                }
            }
        ]
    }
}