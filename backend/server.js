const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
let mongoose = require('mongoose');
//let mysql = require('mysql');

const DBconfig = require('./DB/db');
const { json } = require('body-parser');

const ProductRoute = require('./routes/ProductRoutes');

const UserRoutes = require('./routes/UserRoute');

mongoose.Promise = global.Promise;

mongoose.connect(DBconfig.db,{
    useNewUrlParser:true
}).then(()=>{
    console.log("sucessfull connected")
}).catch(e =>{
    console.log('error'+e);
})

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(cors());

app.use('/user',ProductRoute);
app.use('/user',UserRoutes);


const port = process.env.PORT || 4000;
app.listen(port,()=>{

    console.log('port connected'+ port)
})


/*

const connection = mysql.createPool({

    host:'localhost',
    user:'root',
    password:'password',
    database:'admindb'


});



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true

}))

app.use(cors());


app.get('/',async(req,res)=>{

    res.send('hii')
})

app.post('/add',async(req,res)=>{

    const {name} =req.body
    const {email} =req.body
    const {password} =req.body
   
 
   
     const Adddata = "INSERT INTO  user(name,email,password) values(?,?,?)";
 
 
   const User = await  connection.query(Adddata,[name,email,password]);

   console.log(User);
 
   
 });
*/