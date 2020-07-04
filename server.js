const express = require('express');
const mongo = require('mongodb').MongoClient;

const app = express();

// Start Server
app.listen(3000, () => console.log('Server Running') );

app.post('/trip', (req, res) => {/* */});
app.get('/trips', (req, res) => {/* */});
app.post('/expense', (req, res) => {/* */});
app.get('/expenses', (req, res) => {/* */});


const url = 'mongodb://localhost:27017'

let db

mongo.connect(
  url,
  (err, client) => {
    if (err) {
      console.error(err);
      return ;
    }
    db = client.db('tripcost');
  }
)
