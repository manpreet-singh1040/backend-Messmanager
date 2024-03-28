const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');


const app=express();
app.use(cors());
app.use(bodyParser.json());


 let resdata=[{Name:"Manpreet Singh",
              RoomNo:539,bill:[
                [
                ["Month","jan24"],
                ["diet",36],
                ["dietRate",24],
                ["ddiestrate",850],
                ["extra",425],
                ["guest",0],
                ["total",1275]
                ],
                [
                ["Month","nov23"],
                ["diet",72],
                ["dietRate",23],
                ["ddiestrate",1656],
                ["extra",946],
                ["guest",0],
                ["total",2661]
                ]
            ]
        }];
console.log(`server is live!!`);
app.post('/checkBill',async(req,res)=>{
    console.log(`got your call`);
    let data=req.body;
    console.log(req.body);
    res.send(JSON.stringify(resdata));
    res.status(200);
});


app.post('/',async(req,res)=>{
    console.log(req.body);
    res.status(200);
    res.send(JSON.stringify({message:`submitted`}));
});



app.listen(3001);