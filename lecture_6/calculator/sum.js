const sumHandler = (req, res) => {
  console.log("in the sum request handler", req.url);
  const body = [];
  req.on('data', chunk => {
    body.push(chunk);
  })
  req.on('end', () => {
    const fullbody = Buffer.concat(body).toString();
    const params = new URLSearchParams(fullbody);
    const bodyObject = Object.fromEntries(params);
    const result = Number(bodyObject.num1) + Number(bodyObject.num2);
    console.log(result);
    res.write(`<h1>Your sum is ${result} </h1>`);
    return res.end();
  })
}

module.exports = sumHandler;