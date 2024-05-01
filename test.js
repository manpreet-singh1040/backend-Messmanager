const express=require('express');
const knex=require('knex');
const app=express();
const port=process.env.PORT || 3000;
// require('dotenv').config();
const cors=require('cors');
// app.use(cors());
app.use(express.json());
const db=  knex({
    client:'pg',
    connection:{
      host:'ddks.postgres.database.azure.com',
      user:'ddks',
      password:'Bali@123',
      port:'5432',
      database:'mess',
      ssl: true
    }
  })
  //Store all the tables
  
// db.select('*').from('jan24').then(data=>{console.log(data)}).catch(err=>{console.log(err)});
let month_abb=["null","jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
app.post("/getdata",(req,resp)=>{
    let rollno=req.body.rollno;
    // let token=req.body.token;
    let month=req.body.month;
    let year=req.body.year;
    table=month_abb[month]+year;
    console.log(table);
    console.log(month);
    console.log(year);
    db.select('*').from(table).where('Rollno',rollno).then(data=>{
        resp.json(data);
    }).catch(err=>{
        console.log(err);
    })
//get all the tables in the database

})
manipulateData=(data)=>{
    let name=null;
    let RoomNo=0;
    let payload={};
    let bill=[];
    for(let i=0;i<data.length;i++){
        let temp=[];
        if(name===null){
            name=data[0][1].name;
            RoomNo=data[0][1].roomno;
            payload["Name"]=name;
            payload["RoomNo"]=roomno;
        }
        let iterat=data[i][1];
        temp.push(["Month",data[i][0]]);
        for(let key in iterat){
            if(key==="rollno" || key==="name" || key==="roomno" || key==="srno"){}
            else {temp.push([key,iterat[key]]);}
        }
        bill.push(temp);

    }
    payload["bill"]=bill;
    return payload;
}
app.get("/", (req, resp) => {
    resp.send(<h1>Hello, I am sending this through my Express server! ${port}</h1>);
});
app.post("/getitlady",async (req,resp)=>{
    let rollno = req.body.rollno.toFixed(2);
    console.log(rollno);
let store = [];
let tableList;

// Fetch all tables first
await db.select('*').from('alltables')
    .then(data => {
        // Extract table names
        tableList = data.map(row => row.tabl);
        console.log(tableList);
        tableList.reverse();
        // Execute queries for each table
        const promises = tableList.map(element => {
            return db.select('*').from(element).where('rollno', rollno)
                .then(data => {
                
                    store.push([element,data[0]]);
                })
                .catch(error => {
                    console.error(error);
                    resp.sendStatus(403);
                });
        });

        // Wait for all queries to complete
        return Promise.all(promises);
    })
    .then(() => {
        console.log(store); // This will now have the populated data
        let payload=manipulateData(store);
        console.log(payload);
        resp.json(payload);
    })
    .catch(error => {
        console.error(error);
        resp.sendStatus(403);
    });
})
app.listen(port,()=>{
    console.log(Server is running on port ${port});
})