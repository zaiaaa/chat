class Table{
    init(conn){
        this.conn = conn
        this.createMessageTable()
    }

    createMessageTable(){
        const sql = `CREATE TABLE IF NOT EXISTS message(
            id INT PRIMARY KEY AUTO_INCREMENT,
            content VARCHAR(1000),
            user VARCHAR(50),
            sendDate DATETIME
        )`
        
        this.conn.query(sql, (e) => {
            if(e){
                console.log('erro ao criar tabela -> ', e.message)
                return
            }
            console.log('tabela criada com sucesso!')
        })
    }
}

module.exports = new Table()