const express = require('express')
const app = express()
const { createServer } = require('http')
const port = 3000
const server = createServer(app)
const { join } = require('node:path') 

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'index.html'))  
})

app.get('/chat.html', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'chat.html'))  
})


server.listen(port, () => {
    console.log('rodando na porta 3000')
})

const connection = require('./inc/connection')
const table = require('./inc/table')

table.init(connection)
