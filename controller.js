const model = require('./model')
class Controller{
    list(){
        console.log('x')
        return model.list()
    }
}

module.exports = new Controller()
