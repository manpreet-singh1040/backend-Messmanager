const mongoose=require('mongoose');
const billdata=require('./readbill');
const bill=require('../models/bill')

const fun=async()=>{
    try{
        await mongoose.connect("mongodb+srv://xyz:rambo999@cluster0.we6xycn.mongodb.net/")
        console.log(`database connected!!`);
        let data=billdata();
        data.forEach(async(obj)=>{
              let data=await bill.findOne({rollno:obj.rollno});
            if(obj.rollno!==undefined)
            {
                const filter={rollno:obj.rollno};
                const update={
                    $push:{
                        bill:obj.bill
                    }
                }
                await bill.updateOne(filter,update)
                console.log("updated!!")

            }

        })
        console.log(`bills are uploaded!!`);

    }
    catch(err){
        console.log(err);
    }
}
fun();
//module.exports=fun;