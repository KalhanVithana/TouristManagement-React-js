const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({

    ProductName :{
        type:String,
    },
    Category :{
        type:String
    },
    markAsProduct:{
        type:Boolean,
        default:0
    }

},
    {
        collection:'product'
    }
)

module.exports = mongoose.model('product',User)
