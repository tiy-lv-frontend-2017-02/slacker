const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

io.on('connection', function(socket){
    socket.on('new message', function(message){
        io.emit('new message', message)
    })
})

server.listen(3001, function(){
    console.log('listening on port 3001')
})