const mongooes = require('mongoose');
const Schema = mongooes.Schema;

let UserAccount = new Schema({

    name:{
       type:String,
      
    },
    email:{

        type: String,
       
    },

    password:{
        type: String,
       
    }
},{
    collection:"User"
}
)
module.exports = mongooes.model("User",UserAccount)