const jwt=require('jsonwebtoken');
const express=require("express");
const router=express.Router();


router.get('/',(req,res)=>{
    const cook=req.cookies;
    console.log(cook);
    res.cookie("token","fkph",{
        httpOnly: false,
        maxAge:900000,
        sameSite:none,
        path:"https://nitjmessman.netlify.app"
    })
    console.log("checkb cookie sent");
    //res.json({mes:"cookie sent"});
    //res.redirect('http://localhost:3000/')
    res.json({mes:"cookie send"});
    //res.end();
})
module.exports=router;