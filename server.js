
// ** Bonus **
// Generate the good / bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet!


var http = require('http');

//Lets define a port we want to listen to
var PORT = 7000; // good one
var PORT2 = 7500; // bad one

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);

//Lets start our server
//takes two parameters: port and callback function 

server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("You are AWESOME!", PORT);
});

server2.listen(PORT2, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("You SUCK!", PORT2);
});

