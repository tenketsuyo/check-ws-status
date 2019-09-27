const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/public/build"),
        filename: "index_bundle.js",
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico|mp4)$/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080',
            browser: 'chrome'
        })
    ],
    devServer: {
        historyApiFallback: true,
        // proxy: {
        //     '/ServiceCheckerWs': 'http://tomcat2.kopr:8185'
        // },
        host: '172.18.6.64',
        port: 8080
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000',
            urls: 'http://tomcat2.kopr:8185/ServiceCheckerWs/rest/check/isAvaliable|http://172.18.5.76:8185/ServiceCheckerWs/rest/check/isAvaliable'
        })
    }
}