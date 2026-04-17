var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
var connection = require('./app/config/connection');
var routes = require('./app/controllers/routes');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Remove after development
app.use(cors({
  origin: 'http://localhost:5173'
  }
));
connection.init();
routes.configure(app);

var server = app.listen(8000, function(){
  console.log('Server listening on port ' + server.address().port);

  // Logger
  app.use(function(req, res, next){
    console.log('%s %s', req.method, req.url);
    next();
  });
});
