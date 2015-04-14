var nodeJsWebSocket = require("nodejs-websocket");
var server = nodeJsWebSocket.createServer(function(connection){
    console.log("A new connection is established");
    var timer = null;
    connection.on("text", function(msg){
        if (msg === "start"){
            timer = setInterval(function(){
                connection.sendText(new Date().toString());
            },5000);
        } else {
            clearInterval(timer);
        }
    });
});
server.listen(9090);
console.log("socket server listening on port 9090");
