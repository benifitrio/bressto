const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { InjectManifest } = require('workbox-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contentHash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/templates/index.html'),
      filename: 'index.html',
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 50,
          },
        },
      ],
      overrideExtension: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/public'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }),
    new WebpackPwaManifest({
      name: 'Breto Restaurant ',
      short_name: 'Bresto',
      description: 'List Resturant Populer in Indonesia',
      start_url: '/index.html',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#d84315',
      crossorigin: 'use-credentials',
      icons: [
        {
          src: path.resolve(__dirname, 'src/public/images/icon/icon.png'),
          sizes: [96, 120, 128, 152, 167, 180, 192, 256, 384, 512],
          type: 'image/png',
          purpose: 'any maskable',
          destination: path.join('images', 'icon'),
        },
        {
          src: path.resolve(__dirname, 'src/public/images/icon/icon.png'),
          sizes: [180, 192, 512],
          type: 'image/png',
          purpose: 'any maskable',
          destination: path.join('images', 'ios'),
          ios: true,
        },
      ],
    }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),
  ],
};
