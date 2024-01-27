var WebSocketServer = require('ws').Server;

var wss = new WebSocketServer({port: 8080, path: '/testing'});

wss.on('connection', function(ws){
    ws.on('message', function(message){
        console.log(`Msg received in server: ${message}`)
    });
    console.log('new connection');
    ws.send('Msg from server');
});