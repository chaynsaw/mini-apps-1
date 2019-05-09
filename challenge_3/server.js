var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var mysql = require('mysql')

var port = 3000;

app.listen(port, console.log(`Listening on port ${port}`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'chat'
})

db.connect()
// function(err) {
//   if (err) {
//     throw err;
//   }
//   console.log('Connected to DB!');
// })

app.get('/query', (req, res) => {
  db.query('select * from pet;', (err, results, fields) => {
    if (err){
      console.log('fuck')
      throw err;
    }
    res.json(results);
  })
})