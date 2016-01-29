var express = require('express');
var app = express();
var swig = require('swig');
app.engine('html',swig.renderFile);
app.set('view engine','html')
app.set('views',__dirname+'/views')
swig.setDefaults({cache:false});


app.use(function(req,res,next){	
	console.log(req.method+" "+req.url+" "+res.statusCode);
	next();
});

app.use('/special',function(req,res,next){	
	console.log("This is the special area");
	next();
});

app.get('/',function(req, res){
	res.render('index',locals)
});

app.get('/news',function(req, res){
	res.send("<h2>This is the news</h2>");
});

app.listen(3000, function(){
	console.log("server listening");
});


var locals = {
	title: "My Big Title",
	people : [
	{name: "Gandalf"},
	{name: "Frodo"},
	{name: "Hermione"}
	]
};