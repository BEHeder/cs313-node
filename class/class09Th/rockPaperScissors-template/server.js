// from 03/05/2020 class, these commands help deploy to Heroku
// npm init
// npm install
// heroku create
// git init
// git remote add
//git add
// git commit
// git push
// heroku open
// You probably also oughta take a look at the one example file with instructions about deploying a new app to Heroku

const express = require('express');

var gameEngine = require('./gameEngine.js');

var app = express();

app.set('port', process.env.PORT || 5000)
  // set up directory for static files
  .use(express.static(__dirname + '/public'))
  // set where are dynamic views will be stored
  .set('views', __dirname + '/views')
  // set default view engine
  .set('view engine', 'ejs')
  // call functions when trying to play a game
  .get('/game', gameEngine.playGame)
  // set default route and content
  .get('/', function (req, res) {
    res.sendFile('form.html', { root: __dirname + "/public"})
  })
  // run localhost
  .listen(app.get('port'), function() {
  	console.log('Listening on port: ' + app.get('port'));
  });


