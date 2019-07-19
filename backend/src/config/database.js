const mongoose = require('mongoose')
mongoose.Promise = global.Promise  //api de promise do mongoose está descontinuada
module.exports = mongoose.connect('mongodb://localhost/todo')