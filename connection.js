const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chat'
})

conn.connect((err) => {
    if(err){
        console.log('error! -> ', err)
        return
    }
    console.log('Conexão com o banco feita com sucesso!')
})

module.exports = conn