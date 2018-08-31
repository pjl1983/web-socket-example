const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// API file for interacting with MongoDB
const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist/chat-app')));

// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/chat-app/index.html'));
});

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'chat-app';
let db;

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  db = client.db(dbName);

  // createCollated(db, function() {
  //   client.close();
  // });
});

function createCollated(db, callback) {
  db.collection('chat').insertOne({
      message: 'canvas'
    }).then(function(result) {
      processResult(result);
    })
};

io.on('connection', (socket) => {
  socket.on('message', (data) => {
    var col = db.collection('message');
    col.insertOne({name: data.name, message: data.message, time: new Date().getTime()}).then(function(r) {
      // db.close();
    });
    socket.broadcast.emit('message2', data);
  });
});


//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

// const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
