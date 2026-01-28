const { createServer } = require('node:http');
const express = require('express');
const { configDotenv } = require('dotenv');
configDotenv()
const app = express()
const hostname = process.env.HOST;
const port = process.env.PORT;

const server = createServer(app);

async function handleRequest(req, res) {
  res.send('My Name is Abhishek Suryavanshi');
}

app.get('/', handleRequest);


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
