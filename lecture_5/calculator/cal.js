const fs = require('fs');
const sumHandler = require('./sum');
const randomName = (req, res) => {
  if (req.url === '/') {
    res.write(`<h1>Welcome to Home</h1>
       <li><a href="/calculator">Go To Calcultor</a></li>`);
    return res.end();
  }
  else if (req.url === "/calculator") {
    res.write(`<html>
<head>
  <title>Sum of Two Numbers</title>
</head>
<body>
  <h3>Sum Calculator</h3>
  <form action= '/calculator-result' method="POST">
  <input type="number" name="num1" placeholder="Enter first number">
  <input type="number" name="num2" placeholder="Enter second number">
  <button type="submit">Sum</button>
  <br>
  <li><a href="/">Go To Home</a></li>
</form>
</body>
   </html>`)
  }
  else if (req.url === '/calculator-result' && req.method == "POST") {
    return sumHandler(req, res);
  }
  else {
    res.write(`<h1>404 page not Found</h1>`);
  }
}

module.exports = randomName;