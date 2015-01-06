
var url = require('url');
var qs = require('querystring');
var message = {'results': []};

exports.requestHandler = function(request, response) {

  var statusCode = 200;
  var postCode = 201;
  var headers = defaultCorsHeaders;
  headers['Content-Type'] = "application/json";


  var urlParsed = url.parse(request.url);


  if (urlParsed.pathname === '/'){
    response.writeHead(statusCode, headers);
    response.end("Hello, World!");
  }
  else if(urlParsed.pathname === '/classes/messages'){
    if ( request.method === "GET") {
      response.writeHead(statusCode, headers);
      response.end(JSON.stringify(message));
    } else if (request.method === "POST"){

      var postData = "";

      request.on('data', function(data){
        postData += data;
        //console.log("this is data from request", data);
      });

      request.on("end", function(){
        console.log("what is before", postData);
        var data = JSON.parse(postData);
         //console.log("this is on end request", data);
          message.results.push(data);
        console.log("what is one", data);
        console.log("what is two", message);
        console.log("what is three", message.results);
        console.log("what is four", message.results[0]);
      });

      response.writeHead(postCode, headers);
     // console.log("Here is the response: "+response);
      response.end();
    }
  } else if(urlParsed.pathname === '/classes/room1') {
    if ( request.method === "GET") {
      response.writeHead(statusCode, headers);
      response.end(JSON.stringify(message));
    } else if (request.method === "POST"){

      var mpostData = "";

      request.on('data', function(data){
        mpostData += data;
        //console.log("this is data from request", data);
      });

      request.on("end", function(){
        var data = JSON.parse(mpostData);
        //console.log("this is on end request", data);
         message.results.push(data);

        console.log("what is two", message.results);
        console.log("what is three", message);
        console.log("what is four", message.results[0]);
      });

      response.writeHead(postCode, headers);
      console.log("Here is the response: "+response);
      response.end();
    }

  } else {
    response.writeHead(404, 'Resource Not Found', {'Content-Type': 'text/html'});
    response.end('<!doctype html><html><head><title>404</title></head><body>404: Resource Not Found</body></html>');
  }

  console.log("Serving request type " + request.method + " for url " + request.url);

};


var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

