const express= require('express');
const app=express();
require("./db/conn");

app.get('/',(req,res)=>{
    res.send("hii");
});

app.listen(3000,()=>{
    console.log("server is running at port 3000");
})