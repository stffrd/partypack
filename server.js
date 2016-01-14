var path     = require('path');

var express  = require('express'),
    app      = express();

var webpack  = require('webpack'),
    config   = require('./webpack.dev.config.js'),
    compiler = webpack(config),
    wpHot      = require('webpack-hot-middleware')(compiler),
    wpMiddleware   = require('webpack-dev-middleware'),
    port = 3000;


app.use( wpMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(wpHot);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('There\'s a party happening on port ' + port);
});
