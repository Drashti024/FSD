var http = require('http');
var fs = require('fs');
http.createServer(function(req,res)
{
    fs.readFile(__dirname+'/demo7.html','utf8',function(err,data)
    {
        console.log(data);
        res.write(data);
        res.end("hello,world!");
    });
}).listen(3000);
console.log("Server listening on 3000");