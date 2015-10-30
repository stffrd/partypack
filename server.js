var path     = require('path');

var express  = require('express'),
    app      = express();

var webpack  = require('webpack'),
    config   = require('./webpack.dev.config.js'),
    compiler = webpack(config),
    hot      = require('webpack-hot-middleware')(compiler),
    middle   = require('webpack-dev-middleware')


app.use( middle(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(hot);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});