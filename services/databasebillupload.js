const mongoose=require('mongoose');
const billdata=require('./readbill');
const bill=require('../models/bill')

const fun=async()=>{
    try{
        await mongoose.connect("mongodb+srv://xyz:rambo999@cluster0.we6xycn.mongodb.net/")
        console.log(`database connected!!`);
        let data=billdata();
        data.forEach(async(obj)=>{
            await bill.create({
                roomno:obj.roomno,
                rollno:obj.rollno,
                name:obj.name,
                hostel:'MBH-B',
                bill:[obj.bill[0]]
            });

        })
        console.log(`bills are uploaded!!`);

    }
    catch(err){
        console.log(err);
    }
}

module.exports=fun;