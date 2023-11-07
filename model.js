const connection = require('./inc/connection')
class Model{
    list(){
    const sql = "SELECT * FROM message ORDER BY id"
    return new Promise ((res, rej) => {
        connection.query(sql, {}, (e, resp) => {
        if(e){
            console.log('error -> ', e.message)
            rej(resp)
        }
        res(resp)
    })
})

}}

module.exports = new Model