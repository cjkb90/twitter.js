var express = require('express');
var app = express();

app.use(function(req,res,next){	
	console.log(req.method+" "+req.url+" "+res.statusCode);
	next();
});

app.use('/special',function(req,res,next){	
	console.log("This is the special area");
	next();
});

app.get('/',function(req, res){
	
	res.send("<h2>Welcome all yee</h2>");
});

app.get('/news',function(req, res){
	res.send("<h2>This is the news</h2>");
});

app.listen(3000, function(){
	console.log("server listening");
});