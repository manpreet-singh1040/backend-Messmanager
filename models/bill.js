const mongoose=require('mongoose');

const billSchema=new mongoose.Schema({
    rollno:{
        type:Number,
        unique:true,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    roomno:{
        type:Number,
        required:true
    },
    hostel:{
        type:String,
        required:true
    },
    bill:{
        type:[{
            month:Number,
            diet:Number,
            dietrate:Number,
            diettotal:Number,
            extra:Number,
            total:Number,
            guest:Number,
            mis:String
        }]
    }
})

module.exports=mongoose.model('Bill',billSchema);
