const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const { status } = require('express/lib/response');
const myRouters=require('./myRouter');
const cookieParser=require('cookie-parser')
const mongoose=require('mongoose');
const user=require('./models/user');
const bill=require('./models/bill');
const billdata=require('./services/readbill');
const databasebillupload=require('./services/databasebillupload');


/*mongoose.connect("mongodb+srv://xyz:rambo999@cluster0.we6xycn.mongodb.net/")
.then(()=>{console.log(`database connected`)})
.catch((err)=>{console.log(err)});*/

const fun=async(rollno)=>{
    try{
        await mongoose.connect("mongodb+srv://xyz:rambo999@cluster0.we6xycn.mongodb.net/")
        console.log(`database connected!!`);
        console.log(`inside`);
        const filter={rollno:rollno}
        let data= await bill.findOne(filter);
        //console.log(data);
        console.log(`data found!!`);
        return data;
    }
    catch(err){
        console.log(err);
    }
}
//fun();

//databasebillupload();


const fun2=async()=>{
    try{
        let data=await billdata();
        console.log(`create`);
        await user.create({
            username:"Manpreet",
            password:"123"
        })
    }
    catch(err){
        console.log(err);
    }
}

//fun2();
/*const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://xyz:rambo999@cluster0.we6xycn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/


const app=express();
app.use(cors({
    origin:'https://nitjmessmanager.netlify.app',
    credentials:true
}));
app.use((req,res,next)=>{
    console.log(req.body);
    next();
});
  app.use(cookieParser());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

//const router=express.Router();
const mid=(req,res,next)=>{
    console.log(`in mid`);
    next();
}
//app.use("/login",mid);




app.use("/",mid,myRouters);







/*app.post('/login',(req,res)=>{
    console.log(req.body);
    res.status(200).json({mes:`noice`});
})*/
/*app.post('/checkbill',async(req,res)=>{
    console.log(`got your call for rollno.--->${req.body.rollno}`);
    let data=await fun(req.body.rollno);
    console.log(data);
    res.json(data);
});*/

/*
app.post('/',async(req,res)=>{
    console.log(req.body);
    res.status(200);
    res.send(JSON.stringify({message:`submitted`}));
});


app.get("/",(req,res)=>{
    console.log(req.body.name);
    res.status(200).json({status:"successful"});
});
//app.get('/',async())
*/
app.listen(8080,()=>{ console.log(`server is live`);});