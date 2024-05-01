const jwt=require('jsonwebtoken');
const loginController=(req,res)=>{
    console.log(req.body);
    console.log(`inside login`);
    if(req.body.auth)
    {
        const user={
            username:req.body.username,
            password:req.body.password
        }
        let sessionToken=jwt.sign(user,"PanDiFu");
        console.log(`cookie send`);
        res.cookie("sessionToken",sessionToken,{
            httpOnly:true,
            sameSite: 'Strict'});
       res.send(JSON.stringify({status:true}));
    }
    else{
        res.send(JSON.stringify({status:false}));
    }
};

module.exports=loginController;