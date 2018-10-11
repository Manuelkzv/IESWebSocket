//npm install --save ws

const varWebSocket = require('ws');

const wsServer =
new varWebSocket.Server({ port: 6666 });

console.log("ws Escuchando en 6666");

wsServer.on('connection',
function connection(ws){
    console.log("conexión entrante");
    ws.on('message',
    function incoming(data){
      console.log("Está llegando mensaje");
    wsServer.clients.forEach(function each(cliente){
      console.log("Sí tengo clientes");
      if(cliente !== ws &&
        cliente.readyState === varWebSocket.OPEN){
          console.log(data);
          cliente.send(data)
        }
      });
    });
});

wsServer.broadcast = function broadcast(data){
  wsServer.clients.forEach(function each(cliente){
    if(cliente.readyState === varWebSocket.OPEN){
        cliente.send(data);
    }
  });
}
