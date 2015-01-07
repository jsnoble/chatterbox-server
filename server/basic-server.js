
var http = require("http");
var handleRequest = require("./request-handler");
var url = require('url');
var helpers = require("./helpers");


var port = 3000;

var ip = "127.0.0.1";

var routes = {
  '/classes/chatterbox/': handleRequest.requestHandler,
  '/classes/messages': handleRequest.requestHandler,
  '/classes/room1': handleRequest.requestHandler
};

var server = http.createServer(function(request, response){
  console.log ("Serving request type " + request.method + " for url " + request.url);

  var parts = url.parse(request.url);
  console.log("url " +parts.pathname);
  var route = routes[parts.pathname];
  //console.log(route);
  if (route){
    route(request, response);
  } else {
    helpers.sendResponse(response, "Not Found", 404);
  }

});
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);

