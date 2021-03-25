const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true

}).then(()=>{
    console.log('Conectado ao banco de dados!')
}).catch((err) => {
    console.log('Houve um erro ao se conectar:' + err);
}); 
mongoose.Promise = global.Promise;

module.exports = mongoose;