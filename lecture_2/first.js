const fs = require('fs');

let a=10;
let b =9;
let sum = a+b;
let product=a*b;

let data= `sum: ${sum} and product: ${product}`;
console.log(data);
fs.writeFile('firstFile.txt', data, (err)=>{
  if (err) throw err;
  console.log("data is written to file"); 
})