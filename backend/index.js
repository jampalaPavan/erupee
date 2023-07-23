const express = require("express")

const cors = require("cors")

const app=express()

const PORT = 4000

app.use(cors())//middleware

app.get('/', (req, res)=>
{
     res.send("Hello World")

}) 

app.get('/api/getdata', (req, res)=>{
    res.send("Hello World")

})

app.listen(PORT, ()=>{ 
    console.log("listening on port 4000");

})