const app = require('http');
const fs = require('fs');

const server = app.createServer((req, res) => {
  // yahi pe sara navigation decide hoga 
  if (req.url.toLowerCase() === '/home') {
    res.write(`<h1>Welcome to Home</h1>`);
  }
  else if (req.url.toLowerCase() === '/men') {
    res.write(`<h1>Welcome to men</h1>`)
  }
  else if (req.url.toLowerCase() === '/women') {
    res.write(`<h1>Welcome to women</h1>`);
    res.write(`<ul>
                <li><a href="/Home">Home</a></li>
              </ul>`)
  }
  else if (req.url.toLowerCase() === '/kids') {
    res.write(`<h1>Welcome to kids</h1>`)
  }
  else if (req.url.toLowerCase() === '/cart') {
    res.write(`<h1>Welcome to Cart</h1>`)
  }
  else if (req.url === '/') {
    console.log(req.url, req.method, req.headers);
    res.write(
      `<html lang="en">
        <head>
          <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=10">
            <title>response page</title>
            </head>
            <body>
              <ul>
                <li><a href="/Home">Home</a></li>
                <li><a href="/Men">Men</a></li>
                <li><a href="/Women">Women</a></li>
                <li><a href="/Kids">Kids</a></li>
                <li><a href="/Cart">Cart</a></li>
              </ul>
            </body>
          </html>`);
    res.end();
  }
})

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`the server is listening at PORT:${PORT} `);
})
