const webpack = require("webpack");
const path = require("path");
const pkg = require("./package.json");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require('webpack-node-externals');

let libraryName = pkg.name;
let outputFile, mode;

const config = {
    optimization: {
        minimize: false,
        minimizer: [
            (compiler) => {
                const TerserPlugin = require('terser-webpack-plugin');
                new TerserPlugin({
                  terserOptions: {
                        compress: {},
                    }
                }).apply(compiler);
            },
        ]
    },
    mode: 'none',
    entry: ['./src/index.js', './src/scss/styles.scss'],
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        library: libraryName,
        libraryTarget: "umd",
        libraryExport: "default",
        umdNamedDefine: true,
        globalObject: "typeof self !== 'undefined' ? self : this",
    },
    target: 'node',
    
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /(\.jsx|\.js|\.ts|\.tsx)$/,
                use: {
                loader: "babel-loader",
                },
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'css/[name].css',
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader?-url'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
        ], 
    },
    resolve: {
        modules: [path.resolve("./node_modules"), path.resolve("./src")],
        extensions: [".json", ".js"],
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.php',
        port: 8888,
        writeToDisk: true,
        watchContentBase: true,
        open: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ]
}

module.exports = config;




// module.exports = {
//     // optimization: {
//     //     minimize: false,
//     //     minimizer: [
//     //         (compiler) => {
//     //             const TerserPlugin = require('terser-webpack-plugin');
//     //             new TerserPlugin({
//     //               terserOptions: {
//     //                     compress: {},
//     //                 }
//     //             }).apply(compiler);
//     //         },
//     //     ]
//     // },
//     // entry: ['./src/index.js', './src/scss/styles.scss'],
//     // output: {
//     //     filename: 'bundle.js',
//     //     path: path.resolve(__dirname, './dist'),
//     //     publicPath: './dist/',
//     //     library: 'campus',
//     //     libraryTarget: 'umd',
//     //     libraryExport: "default",
//     //     umdNamedDefine: true,
//     //     globalObject: "typeof self !== 'undefined' ? self : this",
//     // },

//     mode: 'none',
//     devServer: {
//         contentBase: path.resolve(__dirname, './dist'),
//         index: 'index.php',
//         port: 8888,
//         writeToDisk: true,
//         watchContentBase: true,
//         open: true,
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(png|jpg)$/,
//                 type: 'asset',
//             },
//             {
//                 test: /\.scss$/,
//                 use: [
//                     {
//                         loader: 'file-loader',
//                         options: {
//                             name: 'css/[name].css',
//                         }
//                     },
//                     {
//                         loader: 'extract-loader'
//                     },
//                     {
//                         loader: 'css-loader?-url'
//                     },
//                     {
//                         loader: 'postcss-loader'
//                     },
//                     {
//                         loader: 'sass-loader'
//                     }
//                 ]
//             },
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: 'babel-loader'
//             }
//         ]
//     },
//     target: 'node', // in order to ignore built-in modules like path, fs, etc. 
//     externals: [nodeExternals()],
//     plugins: [
//         new MiniCssExtractPlugin({
//           filename: '[name].css',
//           chunkFilename: '[id].css',
//         })
//       ]
// };
