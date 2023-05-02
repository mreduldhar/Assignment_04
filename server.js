const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function (req,res){


    if(req.url=='/' || req.url=='/home'){

        fs.readFile('./public/home.html',function(error,data){
            if(error){
                res.writeHead(404,{'Content-Type':'text/html'});
                res.write("File Not Found");
                res.end();
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                res.end();
            }
        });
    }
    else if(req.url=='/about'){
        fs.readFile('./public/about.html',function(error,data){
            if(error){
                res.writeHead(404,{'Content-Type':'text/html'});
                res.write("File Not Found");
                res.end();
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                res.end();
            }
        });
    }else {
        const data = fs.readFileSync('./public/404.html')
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    }


});

console.log("Server is Running Successfully ");