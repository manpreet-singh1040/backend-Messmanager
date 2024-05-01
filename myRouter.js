const express=require('express');
const router=express.Router();
const loginRoute=require('./routes/login');
const uploadbillRoute=require("./routes/uploadbill")
const getcokRoute=require("./routes/getcok")
const check=require('./authMiddleware/checkToken');
const checkbillroute=require('./routes/checkbill');


const testmid=(req,res,next)=>{
    console.log(`hey rollno is ${req.body.rollno}`);
    next();
}

router.use('/login',loginRoute);
router.use('/uploadbill',check,uploadbillRoute);
router.use('/getcok',getcokRoute);
router.use('/checkbill',testmid,checkbillroute);
module.exports=router;