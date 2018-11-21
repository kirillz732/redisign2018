const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: [
      './src/js/main.js',
      './src/scss/style.scss'
    ]
  },
  output: {
    filename: 'main.js',
    path: `${__dirname}/build`,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['ie >= 8', 'last 4 version']
                })
              ],
              sourceMap: true
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: [
          path.resolve(__dirname, "./src/images")
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        include: [
          path.resolve(__dirname, "./src/fonts")
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  devServer: {
    contentBase: './build',
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`
    }),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/about.html`,
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/faq.html`,
      filename: 'faq.html'
    }),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/news-page-video.html`,
      filename: 'news-page-video.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new StyleLintPlugin({
      files: 'src/**/*.scss',
      syntax: 'scss'
    }),
    new CleanWebpackPlugin('build')
  ]
};