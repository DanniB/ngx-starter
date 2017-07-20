'use strict';

var express = require('express');
var _ = require('lodash');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json())

var counter = 0;
var users = require('./users.json');

app.get('/api/user', function(req, res){
  var userArray = _.values(users);
  res.send({ data: userArray});
});

app.post('/api/user', function (req, res) {
  var id = counter++;
  var user = req.body;

  user.id = id;

  console.log('Adding user to collection: %j', user);
  users[user.id] = user;

  res.send({ data: user });
});

app.get('/api/user/:id', function (req, res) {
  var id = req.param('id');

  if (users[id]) {
    var user = users[id];
    res.send({ data: user });
  }
  else {
    res.status(404);
    res.send();
  }
});

app.put('/api/user/:id', function (req, res) {
  var id = req.param('id');
  var user = req.body;
  user.id = id;

  console.log('Updating user in collection: %j', user);

  if (users[id]) {
    users[id] = user;
    res.send({ data: user });
  }
  else {
    res.status(404);
    res.send();
  }
});

app.delete('/api/user/:id', function (req, res) {
  var id = req.param('id');

  if (users[id]) {
    console.log('Removing user from collection: %j', users[id]);

    delete users[id];
    res.status(200);
  }
  else {
    res.status(404);
  }

  res.send();
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
