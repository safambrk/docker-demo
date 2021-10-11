// MySQL 
const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  port: "3307",
  user: "root",
  password: "root",
  database: "docker-demo"
});

let data = null;

pool.query('select id from user', (err, rows) => {
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
    message: "Hello! This is my fisrt Docker Demo! 😎",
    info: "CI to Docker Hub added! 😎",
    data: data
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
