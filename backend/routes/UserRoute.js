const express = require('express');

const router = express.Router();

let UserAccountSchema = require('../model/UserAccount');

const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport')


const transpoter = nodemailer.createTransport(sendgridTransport({
  auth:{
    api_key:"//APi Key" /*add api key*/
  }
}))



router.route('/acc').get(async(req,res)=>{

    res.send("its work")
    console.log("work")
})



router.route('/signup').post(async(req,res)=>{


    const {name,email,password}= req.body;

    const User= new UserAccountSchema({

        name,
        email,
        password
    })

    const saveUser = await User.save();

    if(saveUser){

        
        transpoter.sendMail({

            to:User.email,
            from:"no-replay@insta.com",
            subject:"sucess sign up",
            html:"<h1>welcome</h1>"
        })
    }

    res.json(saveUser);
    console.log(saveUser);

})







module.exports=router;
