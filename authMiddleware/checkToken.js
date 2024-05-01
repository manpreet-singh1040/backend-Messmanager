const jwt=require('jsonwebtoken');
const check=(req,res,next)=>{
    if(req.cookies===undefined)
    {
        res.json({login:false});
    }
    try{
        console.log(`inside checktoken`);
        let payload=jwt.verify(req.cookies.sessionToken,"PanDiFu");
        console.log(payload);
        console.log(`complete checktoken`);
        next();
    }
    catch(err){
        console.log(`failed checktoken`);
        res.json({login:false});
    }
}

module.exports=check;