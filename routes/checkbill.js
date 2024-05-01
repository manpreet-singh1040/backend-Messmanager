const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const bill=require('../models/bill');


router.post('/',async(req,res)=>{
    let rollno=req.body.rollno;
    try{
        await mongoose.connect("mongodb+srv://xyz:rambo999@cluster0.we6xycn.mongodb.net/");
        console.log(`database connected!!`);
        {
            let data=await bill.findOne({rollno:rollno});
            let status=data? true:false;
            resdata={status,data};
            console.log(resdata);
            res.json(resdata);
        }
        
    }
    catch(err){
        console.log(`database connection error!!!!`);
        res.status(500);
    }
})

module.exports=router;
