const http = require("http");

const myserver = http.createServer((req, res) => {
  // console.log("server 1"); // ye  hme batata hai ki kitni bar hamara request and response ho rha hai
  // res.end("Hello This is my first server");
  if(req.url === '/'){
    res.end("<h1>Welcome to ABES ENgineering College</h1> <img src='https://images.shiksha.com/mediadata/images/1494566683phpZgcM81.jpeg' />");
  }
  else if(req.url === '/about'){
    res.end('We are students');
  }
  else if(req.url === '/class'){
    res.end('CE');
  }
  else{
    res.end('404 error');
  }

});

myserver.listen(8000, () => console.log("server is running on port 8000"));


