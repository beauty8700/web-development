const express=require('express', 4.18)
const bodyParser=require('body-parser')
const app=express();
const port=process.env.PORT || 3000;
//app.use(bodyParser.json());  
app.use(express.json());

// app.get('/router-handler', function(req,res){
//     res.json({
//          name:"Beauty",
//          age:21
//     })
// })
// const fs=require('fs')
// fs.readFile("a.txt","utf-8",function(err,data){
    
// })


app.post('/backened-api/conversation',(req,res)=>{
    //console.log(req.headers)
    const message=req.query.message;
    console.log(message)
    res.send({
        msg:"2+2=4"
    })
})

// app.get('/',(req,res)=>{
//     res.send('Hello world')
// })

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})