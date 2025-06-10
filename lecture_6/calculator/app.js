const app = require('http');
const fs = require('fs');
const randomName = require('./cal');
const server = app.createServer(randomName);

const PORT= 3002;

server.listen(PORT,()=>{
  console.log(`the server is running at http://localhost:${PORT}`);
})
