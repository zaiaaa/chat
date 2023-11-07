const express = require('express')
const app = express()

const { Server } = require('socket.io')

const { createServer } = require('http')
const port = 3000
const { join } = require('node:path') 
const server = createServer(app)
const io = new Server(server)

const controller = require('./controller')

const connection = require('./inc/connection')
const table = require('./inc/table')

table.init(connection)


app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'index.html'))  
})

app.get('/chat.html', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'chat.html'))  
})

io.on('connection', (socket) => {    
    function refreshMessages(){
        controller.list().then((response) => {
            socket.emit('messages', response)
        })
    }
    refreshMessages()
    
    
    socket.on('username_conn', (user) => {
        console.log(`user ${user} Online`)
    })
    socket.on('sendMessage', (data) => {
        const sql = `INSERT INTO message(content, user, sendDate) VALUES('${data.content}', '${data.user}', '${data.sendDate}')`
        connection.query(sql, (e) => {
            if(e){
                console.log('include error -> ', e.message)
                return
            }
            console.log('inclusao feita')
            refreshMessages()
        })
    })
})


server.listen(port, () => {
    console.log('rodando na porta 3000')
})



