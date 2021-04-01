const exp=require("express");
const app=exp();
const errortHandler=require("express-async-handler");
//path to connect with angular
const path=require("path");
//import env module
require("dotenv").config();
// connect angular app with webserve
app.use(exp.static(path.join(__dirname,"./dist/project")));
const adminApiObj=require("./APIS/adminApi");
app.use("/admin",adminApiObj);
const dburl=process.env.dburl;
/*

const mongoose=require("mongoose");
//connect
m=mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true})
//get default connection
const db=mongoose.connection;

//when error is occured
db.on('error',()=>console.log("err in db connection"))

//when connection is success
db.once("open",()=>console.log("connected to db"))

*/

const mc=require("mongodb").MongoClient;
mc.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true})
.then(client=>{
    const databaseObj=client.db("projectDatabase");
    const adminProductCollectionObj=databaseObj.collection("adminproductcollection");
    app.set("adminProductCollectionObj",adminProductCollectionObj)
   
    console.log("db is running successfully")

})
.catch(err=>console.log("err in db connection",err))



//event handler for invalid path
app.use((req,res,next)=>{
    res.send({message:`${req.url} is invalid`})


})
//event handkler for syntax errors
app.use((err,req,res,next)=>{
    res.send({message:"error occured",reason:err.message})

})

app.listen(4000,()=>console.log("webserver is on 4000"));