
var helpers = require("./helpers");

var objId = 1;
var messages = [
  {
    text: 'Do my bidding!',
    username: "Jono",
    objectId: objId
  }
];

var actions = {
  "GET": function(request, response){
    helpers.sendResponse(response, {results: messages})
  },
  "POST": function(request, response){
    helpers.collectionData(request, function(message){
      messages.push(message);
      message.objectId = ++objId;
      helpers.sendResponse(response, {objectId: 1}, 201)
    });
  },
  "OPTIONS": function(request, response){
    helpers.sendResponse(response, null);
  }
};



exports.requestHandler = function(request, response) {

  var action = actions[request.method];
  //console.log(action);
  if (action) {
    action(request, response);
  } else {
    helpers.sendResponse(response , 'Not Found' , 404);
  }
};



//
//  if (urlParsed.pathname === '/'){
//    response.writeHead(statusCode, headers);
//    response.end("Hello, World!");
//  }
//  else if(urlParsed.pathname === '/classes/messages'){
//    if ( request.method === "GET") {
//      response.writeHead(statusCode, headers);
//      response.end(JSON.stringify(message));
//    } else if (request.method === "POST"){
//
//      var postData = "";
//
//      request.on('data', function(data){
//        postData += data;
//        //console.log("this is data from request", data);
//      });
//
//      request.on("end", function(){
//        console.log("what is before", postData);
//        var data = JSON.parse(postData);
//         //console.log("this is on end request", data);
//          message.results.push(data);
//        //console.log("what is one", data);
//        //console.log("what is two", message);
//        //console.log("what is three", message.results);
//        //console.log("what is four", message.results[0]);
//      });
//
//      response.writeHead(postCode, headers);
//     // console.log("Here is the response: "+response);
//      response.end();
//    }
//  } else if(urlParsed.pathname === "/classes/room1") {
//    if ( request.method === "GET") {
//      response.writeHead(statusCode, headers);
//      response.end(JSON.stringify(message));
//    } else if (request.method === "POST"){
//
//      var mpostData = "";
//
//      request.on('data', function(data){
//        mpostData += data;
//        //console.log("this is data from request", data);
//      });
//
//      request.on("end", function(){
//        var data = JSON.parse(mpostData);
//        //console.log("this is on end request", data);
//         message.results.push(data);
//
//        //console.log("what is two", message.results);
//        //console.log("what is three", message);
//        //console.log("what is four", message.results[0]);
//      });
//
//      response.writeHead(postCode, headers);
//      console.log("Here is the response: "+response);
//      response.end();
//    }
//
//  } else {
//    response.writeHead(404, 'Resource Not Found', {'Content-Type': 'text/html'});
//    response.end('<!doctype html><html><head><title>404</title></head><body>404: Resource Not Found</body></html>');
//  }
//
//
//
//};

//var data = {
//    message: []
//    room1: [{text:'hey', createdAt: 'isfjals;f', username: 'blah'}, {text: 'newMessage', createdAt: '', username: 'name'}],
//    room2: [{text:'hey', createdAt: 'isfjals;f', username: 'blah'}],
//    room3: [{text:'hey', createdAt: 'isfjals;f', username: 'blah'}],
//}

