const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const sha1 = require('sha1')
const uuid = require('uuid')

const mysql = require('mysql');
const conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'slacker',
  password : 'F8!vQ6#J}&C/p<rP',
  database : 'Chatroom'
});

conn.connect()

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.post('/login', function(req, res){
    var sql = 'SELECT * FROM users WHERE username=? AND password=?'

    conn.query(sql, [req.body.username, sha1(req.body.password)], function(err, results){
        if (results.length > 0) {
            const token = uuid()

            var tokenSQL = "UPDATE users SET token = ? WHERE id = " + results[0].id

            conn.query(tokenSQL, [token], function(err, updaters){
                res.json({
                    message: 'login successful',
                    token: token
                })
            })
        } else {
            res.status(401).json({
                'message':"Wrong username or password"
            })
        }
    })
})

app.post('/register', function(req, res){
    var sql = 'INSERT INTO users (username, password) VALUES (?, ?)'

    conn.query(sql, [req.body.username, sha1(req.body.password)], function(err, results){
        res.json({
            'message': 'User Added'
        })
    })
})

app.get('/foo', isAuthenticated, function(req, res){
    res.json({
        'Hello': "world"
    })
})

function isAuthenticated(req, res, next) {
    const token = req.get('Authorization')

    console.log(token)

    if (!token) {
        res.status(401).json({
            message:'Not Authenticated'
        })
    } else {
        var tokenSQL = 'SELECT count(1) AS count FROM users WHERE token = ?'

        conn.query(tokenSQL, [token], function(err, results){
            const count = results[0].count

            if (count === 1) {
                next()
            } else {
                res.status(401).json({
                    message:'Not Authenticated'
                })
            }
        })
    } 
}

io.on('connection', function(socket){
    socket.on('new message', function(message){
        io.emit('new message', message)
    })
})

server.listen(3001, function(){
    console.log('listening on port 3001')
})



