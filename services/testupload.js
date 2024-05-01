const mongoose=require('mongoose');
const bill=require('../models/bill');
const readbill=require('./readbill');

const fun=async()=>{
    try{

        await mongoose.connect('mongodb://127.0.0.1:27017');
        console.log(`database connected!!`);
        let data=readbill();
        let testdata=[data[0],data[1]];
        console.log(testdata);
        testdata.forEach(async(obj)=>{
            const filter={rollno:obj.rollno}
            
            await bill.create({
                roomno:obj.rollno,
                rollno:obj.rollno,
                name:obj.name,
                hostel:'MBH-B',
                bill:[obj.bill[0]]
            })
        })
        console.log(`data inserted!!`);
    }
    catch(err){
        console.log(err);
    }
}

fun();


