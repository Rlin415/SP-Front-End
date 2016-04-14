"use strict";

const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  apiRoutes = require('./controllers');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));
app.use('/api', apiRoutes);

app.set('port', 3000);

if (process.env.NODE_ENV === undefined) {
  mongoose.connect('mongodb://localhost/stitch-planet');
} else {
  // connect mongoose to database
}

app.listen(app.get('port'), () => {
  console.log('server listening on', app.get('port'));
});
