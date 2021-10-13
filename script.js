// MySQL 
const mysql = require("mysql");

let data = null;

const pool = mysql.createPool({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '1234',
  database: 'docker-demo'
});


pool.query('select 1 + 1 ', (err, rows) => {
  if(err) throw err;
  console.log("Successfully connected to MySQL database!");
  console.log("Data : ", rows);
  data = rows;
});



// Express API
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    message: "Hello! This is my fisrt Docker Demo!",
    testData: data
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
