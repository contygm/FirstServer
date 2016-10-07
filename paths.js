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

	// determines function to call based on path
    switch(urlParts.pathname){
    	case '/':
    		displayRoot(urlParts.pathname, req, res);
    		break;
    	case '/portfolio':
    		displayPortfolio(urlParts.pathname, req, res);
    		break;
    	default:
    		display404(urlParts.pathname, req, res);
    }
};

function displayRoot (url, req, res){
	var myHTML = '<html>';
	myHTML += '<body><h1>Home</h1>';
	myHTML += "<a href='/portfolio'>Portfolio</a>";
	myHTML += '</body></html>'

	// tells you if request was successfull; 200 = sucessful
	res.writeHead(200, {'Content-type': 'text/html'});

	res.end(myHTML);
};

function displayPortfolio(url, req, res){
	var myHTML = '<html>';
	myHTML += '<body><h1>My Portfolio</h1>';
	myHTML += "<a href='/'>Go Home</a>";
	myHTML += '</body></html>'

	// tells you if request was successfull; 200 = sucessful
	res.writeHead(200, {'Content-type': 'text/html'});

	res.end(myHTML);
};

function display404(url, req, res){
	var myHTML = '<html>';
	myHTML += '<body><h1>My Portfolio</h1>';
	myHTML += "<a href='/'>Go Home</a>";
	myHTML += '</body></html>'

	// tells you if request was successfull; 200 = sucessful
	res.writeHead(404, {'Content-type': 'text/html'});

	res.write('<h1>404 Not Found</h1>');
	res.end("The page you were looking for: " + url + "cannot be found.");
};