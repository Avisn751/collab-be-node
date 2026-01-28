const { createServer } = require('node:http');
const express = require('express')
const app = express()
const hostname = 'localhost';
const port = 3000;

const server = createServer(app);

async function handleRequest(req, res) {
  res.send('My Name is Abhishek');
}

app.get('/', handleRequest);


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
