const htmlWebPackPlugin = require ('html-webpack-plugin');
const MiniCssExtract    = require('mini-css-extract-plugin');
const copyPlugin        = require('copy-webpack-plugin');

module.exports={

    mode: 'development',

    output: {
        clean: true,
        assetModuleFilename: 'images/holi[ext][query]'
    },
    module:{
        rules:[
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
    plugins:[
        new htmlWebPackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtract({
            filename:"[name].css",
            ignoreOrder:false,
        }),
        new copyPlugin({
            patterns:[
                { from: './src/assets/', to: 'assets/' }
            ]
        })
    ],
    

}