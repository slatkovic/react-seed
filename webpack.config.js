var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {

  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './components/index.jsx',
  ],

  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&importLoaders=2&sourceMap&localIdentName=[name]-[local]-[hash:base64:5]' +
          '!postcss' +
          '!sass?outputStyle=expanded&sourceMap'
        )
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react', 'stage-1']
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  plugins: [
    new ExtractTextPlugin('bundle.css', { allChunks: true }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.DefinePlugin({ FLAG_DEV_TOOLS_ON: true })
  ],

  devServer: {
    proxy: {
      '/assets/*': {
        target: 'http://localhost:8080/'
      },
      '*': {
        target: 'http://localhost:8000/',
        secure: false
      }
    }
  }
};
