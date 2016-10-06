
// Using the previous example as a guide, create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.
	// The one listening on port 7000 will always tell the user something good 
	// about themselves.

// The one listening on 7500 will always tell the user something bad about themselves.

// ** Bonus **
// Generate the good / bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet!


var http = require('http');

//Lets define a port we want to listen to
var PORT = 7000;

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
//takes two parameters: port and callback function 

server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

