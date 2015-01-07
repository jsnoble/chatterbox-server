
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



