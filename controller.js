const model = require('./model')
class Controller{
    list(){
        return model.list()
    }
}

module.exports = new Controller()