const path = require('path');
const MiniCSSExtract = require("mini-css-extract-plugin");

module.exports = {
  optimization: {
    minimize: false,
    minimizer: [
        (compiler) => {
            const TerserPlugin = require("terser-webpack-plugin");
            new TerserPlugin({
              terserOptions: {
                    compress: {},
                }
            }).apply(compiler);
        },
    ]
  },
  mode: "none",
  resolve: {
    extensions: [".js"]
  },
  devtool: "source-map",
  entry: ["./src/scss/styles.scss", "@babel/polyfill", "./src/index.js"],
  mode: 'none',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: {
      name: 'campus',
      type: 'umd',
    },
  },
  devtool: "source-map",
  module: {
    rules: [
        {
            test: /\.js/,
            exclude: /node_modules/,
            use: [
                "babel-loader"
            ],
        },
        {
            test: /\.(png|jpg|gif)$/,
            exclude: /node_modules/,
            use: [
                {
                loader: "file-loader",
                options: {
                    outputPath: "images/",
                    publicPath: "dist/images/",
                },
                },
            ],
        },
        {
            test: /\.scss/,
            exclude: /node_modules/,
            use: [
                MiniCSSExtract.loader,
                "css-loader",
                "postcss-loader",
                "sass-loader",
            ],
          },
    ],
  },
  resolve: {
      extensions: [".json", ".js"],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    index: "index.php",
    port: 8888,
    writeToDisk: true,
    watchContentBase: true,
    open: true,
  },
  plugins: [
    new MiniCSSExtract({
        filename: "css/style.css",
    }),
  ]
};
