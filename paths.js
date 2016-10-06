var url = require('url');
var http = require('http');

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Listening on port:", PORT);
});

function handleRequest(req, res){
    // res.end('It Works!! Path Hit: ' + req.url);
    var urlParts = url.parse(req.url);

    console.log(urlParts);
	// determines function to call based on path
    switch(urlParts.pathname){
    	case '/':
    		displayRoot(urlParts.pathname, req, res)
    }
};

function displayRoot (url, req, res){
	var myHTML = '<html>';
	myHTML += '<body><h1>Home</h1></body>';

}