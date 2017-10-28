/* Creating a Local Server using Call back & Listen Functions */

var http = require('http');

var server = http.createServer(function (req,res) 
{
	//If it is successfully sent the status will be 200 i.e OK
	
		res.writeHead(200, {"Content-Type": "text/plain"});
		res.end("Welcome to My Node.js Server..");
});
server.listen(1234, function()
{
		//Go on GC and write https://localhost:1234
		console.log("Server started successfully.. ");
		/* You can now check request as well by entering the local Host address */
		console.log("Enter https://localhost:1234 in Browser to view the response of the server");
});