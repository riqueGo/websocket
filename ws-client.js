var connection = new WebSocket('ws://localhost:8080/testing');

connection.addEventListener('open', (event) => {
    console.log('Connection open!: ', event);
    connection.send('Hey server, whats up?');
});

connection.addEventListener('error', (event) => {
    console.error('WebSocket error:', event);
});

connection.addEventListener('close', (event) => {
    console.log('WebSocket connection closed:', event);
});

connection.addEventListener('message', (event) => {
    console.log('Message from server:', event.data);
    document.getElementById("result").innerHTML += event.data + "<br>";
});