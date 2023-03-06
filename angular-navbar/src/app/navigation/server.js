// const port = 8080
const express = require('express')
const app = express()
const http = require('http').createServer(app)
var server= require('http').Server(app);
//let server= app.listen(port)

const PORT = process.env.PORT || 3000

app.use("/static", express.static('./static/'));

// const io = require('socket.io')(server)
//     // , {
//     // cors: {
//     //     origins: '*',
//     // }
// // })


 const io = require('socket.io')(http)
// // server.listen(80);

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use(express.static(__dirname + '/static'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/navigation.component.html')

})
// Socket 

io.on('connection', function(socket)  {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

})