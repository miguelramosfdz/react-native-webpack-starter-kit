var path = require('path');
var webpack = require('webpack');

module.exports = {
  debug: true,
  devtool: 'source-map',
  watch: true,
  entry: {
    'index.ios': ['./src/main.ios.js'],
    'index.android': ['./src/main.android.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?optional=runtime']
      },
      {
        test: /\.js$/,
        include: /node_modules\/react-native-video/,
        loaders: ['babel-loader?optional=es7.objectRestSpread']
      },
      {
        test: /\.js$/,
        include: /node_modules\/react-native-localization/,
        loaders: ['babel-loader?optional=runtime']
      }
    ]
  },
  resolve: { extensions: ['', '.js', '.jsx', '.es6'] },
  plugins: [
    new webpack.NoErrorsPlugin(),
  ],
};
