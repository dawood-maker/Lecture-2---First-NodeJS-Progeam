console.log("Welcome My Backend Course");
console.log("KG Coding is the best.");

const fs = require("fs");

fs.writeFile("output.text", "writing File", (err) =>{
  if (err) console.log("Erroroccurred");
  else console.log('File Written Successfully');
})


fs.writeFile("open the file ", "writing File", (err) =>{
  if (err) console.log("Erroroccurred");
  else console.log('File Written Successfully');
})
