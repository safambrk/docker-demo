// MySQL 
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "docker-demo"
});

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

connection.end();

// Express Get API
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({ message : "Hello! This is my fisrt Docker Demo! 😎"})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
