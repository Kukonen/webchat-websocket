const WebSocket = require('ws')
const fs = require('fs')
const server = new WebSocket.Server({port: 8080})

server.on('connection', ws => {
    ws.on('message', message => {
        fs.writeFile('./static/' + 'some.jpg', message, ()=>{})
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message)
            }
        })
    })
    ws.send('Server conected')
})