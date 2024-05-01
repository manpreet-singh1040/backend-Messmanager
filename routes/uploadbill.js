const express=require("express");


const router=express.Router();

const mid=(req,res,next)=>{
   // console.log(`in upload bill`);
    next();
};
router.get('/',mid,(req,res)=>{
    res.json({login:true});
})
router.post('/',mid,(req,res)=>{
    res.json({login:true});
})

module.exports=router;