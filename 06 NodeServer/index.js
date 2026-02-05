                // Day1

// const http = require("http");

// const myserver = http.createServer((req, res) => {
//   // console.log("server 1"); // ye  hme batata hai ki kitni bar hamara request and response ho rha hai
//   // res.end("Hello This is my first server");
//   if(req.url === '/'){
//     res.end("<h1>Welcome to ABES ENgineering College</h1> <img src='https://images.shiksha.com/mediadata/images/1494566683phpZgcM81.jpeg' />");
//   }
//   else if(req.url === '/about'){
//     res.end('We are students');
//   }
//   else if(req.url === '/class'){
//     res.end('CE');
//   }
//   else{
//     res.end('404 error');
//   }

// });

// myserver.listen(8000, () => console.log("server is running on port 8000"));




                // Day 2

// const fs = require('fs');

// sync
// write file
// fs.writeFileSync('./about-me.txt','Hi my name is Anand Kumar Prajapati');
// fs.writeFileSync('./abes.txt','ABES provide b.tech and m.tech');

// read file
// const res = fs.readFileSync('./CE.txt','utf-8');
// console.log(res);


// async
// write file
// fs.writeFile('./about2-me.txt','Hi my name is Anand Kumar Prajapati',()=>{ });

// read file
// fs.readFile('./CE.txt','utf-8',(err,result)=>{ 
//   if(err){
//     console.log("error",err);
//   }
//   else{
//     console.log(result);
//   }
// });


                  // Day3

// copy
// const fs=require('fs');
// fs.cpSync('CE.txt','CE1.txt');
// fs.cpSync('CE1.txt','CE2.txt');


// append
// const fs=require('fs');
// fs.appendFileSync('./CE.txt',`and we are coder`);


// delete
// const fs=require('fs');
// fs.unlinkSync('./CE2.txt');



// async

const fs=require('fs');

// fs.copyFile('./CE.txt','./CE1.txt',()=>{ });

// fs.copyFile('./CE.txt','./CE1.txt',(err,res)=>{
//   if(err){
//     console.log("error",err);
//   }
//   else{
//     console.log(res);
//   }
// });


