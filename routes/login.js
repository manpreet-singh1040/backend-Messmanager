
const express=require("express");
const jwt=require('jsonwebtoken');
const auth=require('../authMiddleware/auth')
const router=express.Router();
const loginController=require("../controllers/login");

router.get('/',async(req,res)=>{
    console.log(`beautiful`);
    //console.log(req.cookies);
        console.log("No cookie send on get!!");
        if(req.cookies===undefined)
        {
            console.log(`no cookie`)
            res.json({login:false});
        }
        try{
            let payload=jwt.verify(req.cookies.sessionToken,"PanDiFu");
            console.log(payload);
            console.log("complete detection");
            res.json({login:true});
        }
        catch(err){
            res.json({login:false});
        }
    
})
router.post('/',auth,loginController);

module.exports=router;