var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    fs.writeFile('test.html','HelloWorld',function(err)
    {
        if(err) throw err;
        console.log('File Created');
    });
    fs.readFile(__dirname+'/test.html','utf8',function(err,data)
    {
        console.log(data);
        res.write(data);
        res.end("hello,world!");
    });
    fs.unlink(__dirname+'/test.html',function(err)
    {
        if(err) throw err;
        console.log('File Deleted');
    })
}).listen(3000);
console.log("Server listening on 3000");