const auth=(req,res,next)=>{
    if(req.body.username==='man')
    {
        req.body.auth=true;
        
    }
    else{
        req.body.auth=false;
    }
    next();
}

module.exports=auth;