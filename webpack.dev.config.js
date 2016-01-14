var webpack = require('webpack');
var path = require('path');

var config = {

  /*
    DEVTOOL
  */
  devtool: 'eval',
  /*
    ENTRY
      Each item is a file that Webpack will look at
      and evaluate, pulling in all necessary dependencies
      you made with the require() statement and bundling
      each as a module in output
  */
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './src/entry.js'
  ],

  /*
    OUTPUT
      PATH      : Output to ./dist
      FILENAME  : filename will be 'bundle.js'
      PUBLICPATH: Serve 'bundle.js' from memory
                  as path /static/
  */
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },


  /*
    PLUGINS
      Plugins that are used to enhance the functionality
      of Webpack.
  */
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        include: path.join(__dirname, 'src'),
        loader: 'babel'
      }
    ]
  },

  resolve: {
      extensions: ['','.js']
  }
}


// Export such that calling require(./webpack.config.js)
// will return the config object. 
module.exports = config;
