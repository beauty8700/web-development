// const express= require("express");
// const app = express();

// function Sum(n) {
//      let ans=0;
//     for(let i=1;i<=n;i++){
//         ans=ans+i;
//     }
//     return ans;
    
// }
// app.get('/',function(req,res){
//     const n=req.query.n;
//     const ans=Sum(n);
//     res.send("hi here is your ans => "+ans);
// })
// app.listen(3002);


//hospital 

const express=require("express");
const app=express();

const users=[{
    name:"Beauty",
    kidneys:[{
        healthy:false

    }]
}];

app.use(express.json());
app.get("/",function(req,res){            //this is used when we want to extract or access
    const johnkidneys=users[0].kidneys;     //sth from express
    const numberOfKidneys=johnkidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0;i<johnkidneys.length;i++){
        if(johnkidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    } 
    const numberOfUnHealthyKidneys =numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys,
    })
})

app.post("/",function(req,res){
    //console.log(req.body);
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/",function(req,res){
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy=true;
        
    }
    res.json({});
})

app.delete("/",function(req,res){
    if(oneUnhealthy()){

    
    const newKidneys=[];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })  
        } 
    }
    users[0].kidneys=newKidneys;
    res.json({msg:"done"});
}
else{
    res.status(411).json({
        msg: "You have no bad kidneys"
    });
}
})
function oneUnhealthy(){
    let atleastoneUnhealthy =false;
    for(let i=0;i<users[0].kidneys.length;i++){
    if(!users[0].kidneys[i].healthy){
        atleastoneUnhealthy = true;
    }
}
return atleastoneUnhealthy
}

app.listen(3002);