const express = require('express');
const router = express.Router();
const UserPRoduct = require('../model/User')
const nodemailer = require('nodemailer');
const transport = require('nodemailer-sendgrid-transport');


const transpoter = nodemailer.createTransport(transport,{

    auth:{
        API_key : "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"
    }
})


// router.route('/').get((req,res)=>{

//     res.send('hi')
// });

router.route('/a').post(async(req,res,next)=>{

    await UserPRoduct.create(req.body,(error,data)=>{

        if(error){
            return next(error);
        }
        else{
            res.json(data);
            console.log(data)
        }
    })
})

router.route('/add').post(async(req,res)=>{

    try{
        const{ProductName,Category,markAsProduct}= req.body;

    const Product = new UserPRoduct({

        ProductName,
        Category,
        markAsProduct
    })

    const SaveUser = await Product.save();

   
    console.log(SaveUser);
    res.json({SaveUser});
    }
    catch(e){

      return res.status(500).json({msg:'error'})
    }

})



router.route('/get').get(async(req,res,next)=>{

    await UserPRoduct.find((error,data)=>{

        
        if(error){
            return next(error);
        }
        else{
            res.json(data);
            console.log(data)
        }
    })
    

    router.route('/get/:id').get(async(req,res,next)=>{

        await UserPRoduct.findById(req.params.id,(error,data)=>{
    
            
            if(error){
                return next(error);
            }
            else{
                res.json(data);
                console.log(data)
            }
        })
        
    })
    
})


router.route('/up/:id').put(async(req,res,next)=>{

    await UserPRoduct.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },(error,data)=>{

        if(error){
            return next(error);
        }
        else{
            res.json(data);
            console.log(data)
        }
    })

})

router.route('/u/:id').put(async(req,res)=>{

    let userid= req.params.id;
    const{ProductName,Category,markAsProduct}= req.body;

    const Product = new UserPRoduct({

        ProductName,
        Category,
        markAsProduct
    })
    const update = await UserPRoduct.findByIdAndUpdate(req.params.id,{$set:{markAsProduct:1}}).then(()=>{
        res.status(200).json({msg:'update'})
    }).catch(e=>{
        res.status(400).json({msg:'error'})
    })
    
   
})

router.route('/a/:id').put(async(req,res)=>{

    let userid= req.params.id;
    const{ProductName,Category,markAsProduct}= req.body;

    const Product = new UserPRoduct({

        ProductName,
        Category,
        markAsProduct
    })
    const update = await UserPRoduct.findByIdAndUpdate(req.params.id,{$set:{markAsProduct:0}}).then(()=>{
        res.status(200).json({msg:'update'})
    }).catch(e=>{
        res.status(400).json({msg:'error'})
    })
    
   
})
router.route('/delete/:id').delete(async(req,res,next)=>{

    await UserPRoduct.findByIdAndDelete(req.params.id,(error,data)=>{

   
        if(error){
            return next(error);
        }
        else{
            res.json(data);
            console.log(data)
        }
    })
})


router.route('/select/:id').put(async(req,res)=>{
    const proctID= req.params.id;
    const{ProductName,Category,markAsProduct}= req.body;

    const Product = new UserPRoduct({

        
        markAsProduct
    })

   const updateproduct = await UserPRoduct.findByIdAndUpdate(req.params.id,Product);

   console.log(updateproduct);
    
})
module.exports =router;
