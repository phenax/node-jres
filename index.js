// index.js
exports.respond500 = function(res, error, code, message){
  res.statusCode = 500;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
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
  res.write(JSON.stringify(obj));
  res.end();
};

exports.respond200 = function (res, jsonObj){
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(jsonObj));
  res.end();
};

exports.respond403 = function (res, code, message){
  res.statusCode = 403;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  var obj = {};
  if(message){
    obj.message = message;
  }
  if(code){
    obj.code = code;
  }
  res.write(JSON.stringify(obj));
  res.end();
};

exports.respondError = function(res, code, message, statusCode){
  res.statusCode = statusCode || 500;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  var obj = {};
  if(code){
    obj.code = code;
  }
  if(message){
    obj.message = message;
  }
  res.write(JSON.stringify(obj));
  res.end();
};

exports.respondOptions = function(res, origin, headers, methods){
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", origin || "*");
  res.setHeader("Access-Control-Allow-Headers", headers || "accept, content-type");
  res.setHeader("Access-Control-Allow-Methods", methods || "POST, GET, DELETE, PUT, OPTIONS");
  res.end();
};