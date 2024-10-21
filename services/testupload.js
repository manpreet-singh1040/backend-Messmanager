const mongoose=require('mongoose');
const bill=require('../models/bill');
//const readbill=require('./readbill');

const fun=async()=>{
    try{

        await mongoose.connect('mongodb+srv://xyz:rambo999@cluster0.we6xycn.mongodb.net/');
        console.log(`database connected!!`);
        //let data=readbill();
        let filter={rollno:22104064};
        //await bill.deleteMany(filter);
        let data=await bill.find(filter);
        console.log(data[0].bill);
        console.log(`deleted succesful`);
        return;
    }
    catch(err){
        console.log(err);
        return;
    }
}

fun();


