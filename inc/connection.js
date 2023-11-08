require('dotenv').config()
const mysql = require('mysql')

const conn = mysql.createConnection(process.env.DATABASE_URL)

conn.connect((err) => {
    if(err){
        console.log('error! -> ', err)
        return
    }
    console.log('Conexão com o banco feita com sucesso!')
})

module.exports = conn