const htmlWebPackPlugin = require ('html-webpack-plugin');
const MiniCssExtract    = require('mini-css-extract-plugin');
const copyPlugin        = require('copy-webpack-plugin');
const cssMini           = require('css-minimizer-webpack-plugin');
const terser            = require('terser-webpack-plugin');

module.exports={

    mode: 'production',

    output: {
        clean: true,
        filename:'main.[contenthash].js',
        assetModuleFilename: 'images/holi[ext][query]'
    },
    module:{
        rules:[
            {
                
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
                  
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options:{
                    sources:false,
                    minimize:false,
                },
            },
            {
                test:/\.css$/i,
                exclude:/styles.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/styles.css$/i,
                use:[MiniCssExtract.loader, "css-loader"],
                
            },
            {
               
                test: /\.png/,
                type: 'asset/resource'
                  
            },
            
        ]
    },
    optimization:{
        minimize:true,
        minimizer:[
            new cssMini(),
            new terser(),
        ]
    },

    plugins:[
        new htmlWebPackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtract({
            filename:"[name][fullhash].css",
            ignoreOrder:false,
            
        }),
        new copyPlugin({
            patterns:[
                { from: './src/assets/', to: 'assets/' }
            ]
        }),
    ],
    

}