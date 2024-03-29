// index.js
exports.respond500 = function(res, error, code, message){

  res.writeHead(500, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  var obj = {};
  if(error){
    obj.error = error;
  }
  if(code){
    obj.code = code;
  }
  if(message){
    obj.message = message;
  }
  res.end(JSON.stringify(obj));
};

exports.respond200 = function (res, jsonObj){

  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  res.end(JSON.stringify(jsonObj));
};

exports.respond403 = function (res, code, message){

  res.writeHead(403, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  var obj = {};
  if(message){
    obj.message = message;
  }
  if(code){
    obj.code = code;
  }

  res.end(JSON.stringify(obj));
};

exports.respondError = function(res, code, message, statusCode){

  res.writeHead(statusCode || 500, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  var obj = {};
  if(code){
    obj.code = code;
  }
  if(message){
    obj.message = message;
  }

  res.end(JSON.stringify(obj));
};

exports.respondOptions = function(res, origin, headers, methods){

  res.writeHead(200, {
    "Access-Control-Allow-Origin": origin || "*",
    "Access-Control-Allow-Headers": headers || "accept, content-type",
    "Access-Control-Allow-Methods": methods || "POST, GET, DELETE, PUT, OPTIONS"
  });

  res.end();
};