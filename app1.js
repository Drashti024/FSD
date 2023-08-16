const express = require('express')
const app = express()
const port = 3000
//Middleware to load static data like image and css
app.use(express.static(__dirname+'/public'));

//Custom middleware
app.use(function(req,res,next)
{
    console.log("Middleware called URL is "+req.url);
    next();
});

app.get('/',(req,res) => {
    res.send('Hello World!!')
})

app.get('/home',(req,res) => {
    res.sendFile(__dirname+'/home.html');
})
app.get('/about',(req,res) => {
    res.sendFile(__dirname+'/about.html');
})

//Route with Parameters
//http://127.0.0.1:3000/contact/9899
app.get('/contact/:id/',(req,res) => 
{
    var id = req.params.id;
    res.send("Contact" +id)
})

//Route with QueryString
//http://127.0.0.1:3000/search?name=abc
app.get('/search/',(req,res) => 
{
    var id = req.query.name;
    res.send("Search is " +id)
})
app.get('/process/',(req,res) => 
{
    var a = parseInt(req.query.txt1);
    var b = parseInt(req.query.txt2);
    var c = parseInt(req.query.txt3);
    var d = parseInt(req.query.txt4);
    var q = (req.query.txt5);
    var e = (a + b + c + d)/4;
    var p = a+b+c+d;
    var ans = `Marks of subject1 ${a} </br> Marks of subject2 ${b} </br> Marks of subject3 ${c} </br> Marks of subject4 ${d} </br> Average of subject1 ${e} </br>`;    
    res.send(ans);
    var g = (p*100)/40;
    if(g <= 100)
    {
       q = `pass`;
    }
})
app.get('/myform/',(req,res) => 
{
    res.sendfile(__dirname+ '/form.html');
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})