
// * Create a website with 4 routes:
//  * Home
//  * Favorite Food
//  * Favorite Movies
//  * Favorite CSS Frameworks
// * Use fs to serve the HTML from files rather than straight in the JavaScripts

var url = require('url');
var http = require('http');
var fs = require('fs');

// Set our port to 8080
var PORT = 7263;

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    // res.end('It Works!! Path Hit: ' + req.url);
    var urlParts = url.parse(req.url);

	// determines function to call based on path
    switch(urlParts.pathname){
    	case '/':
    		displayHome(urlParts.pathname, req, res);
    		break;
    	case '/favFoods':
    		displayFood(urlParts.pathname, req, res);
    		break;
    	case '/favMovies':
    		displayMovies(urlParts.pathname, req, res);
    		break;
    	case '/favCSS':
    		displayFrames(urlParts.pathname, req, res);
    		break;
    	default:
    		display404(urlParts.pathname, req, res);
    }
};

function displayHome (url, req, res){
	fs.readFile("home.html", function(err, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });

};

function displayFood (url, req, res){
	fs.readFile("favFoods.html", function(err, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });

};

function displayMovies (url, req, res){
	fs.readFile("favMovies.html", function(err, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });

};

function displayFrames (url, req, res){
	fs.readFile("favCSS.html", function(err, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });

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

// Starts our server.
server.listen(PORT, function(){
    console.log("Server is listening on PORT: " + PORT);
});
