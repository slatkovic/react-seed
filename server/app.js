var express = require('express');
var app = express();
var controller = require('./controller');

var VIEWS_PATH = __dirname;
var VIEW_ENGINE_NAME = 'pug';
var SETTINGS_VIEWS_PATH = 'views';
var SETTINGS_VIEW_ENGINE_NAME = 'view engine';
var PORT = 8000;

function onListen() {
  console.log('App started on port ' + PORT);
}

app.set(SETTINGS_VIEWS_PATH, VIEWS_PATH);
app.set(SETTINGS_VIEW_ENGINE_NAME, VIEW_ENGINE_NAME);

app.get('/', controller.handleIndexRequest);

app.listen(PORT, onListen);
