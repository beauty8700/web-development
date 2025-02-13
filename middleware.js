// const express=require("express");
// const app=express();

// // app.get('/health-checkup',function(req,res){
// //     const username=req.headers.username;
// //     const password=req.headers.password;
// //     const kidneyId=req.query.kidneyId;

// //     // if(!(username==="Beauty" && password==="12345")){
// //         if(username!="Beauty" || password!="12345"){
// //             res.status(400).json({"msg":"something up error"})
// //             return
// //         }
// //         if(kidneyId != 1 && kidneyId!=2){
// //             res.status(400).json({"msg":"something error"})
// //             return
// //         }
// //         res.json({
// //             msg:"your kidney is fine"
// //         })
// //     //}
// // });
// //app.listen(3000);
// app.listen(3000, () => {
//         console.log("Server is running on port 3000");
//     });

// const express=require("express")
// const app=express()

// function usernameValidator(username,password){
//     if(username!="Beauty" && password!="12345"){
//         return false;
//     }
//     return true;
// }

// function kidneyIdValidator(kidneyId){
//     if(kidneyId!=1 && kidneyId!=2){
//         return false
//     }
//     return true
// }

// app.get("/health-checkup",function(req,res){
//     if(!usernameValidator(req.query.username,req.query.password)){
//     res.status(403).json({
//         "msg":"user name and pass is not valid"
//     });
//     return;
// }
//       if(!kidneyIdValidator(req.query.kidneyId)){
//         res.status(411).json({
//             "msg":"the kidney input is wrong"
//         });
//         return;
//       }
//       res.send("Your heart is fine")
// });

// app.put("/replace-checkup",function(req,res){
//     const username=req.headers.username;
//     const password=req.headers.password;
//     const kidneyId=req.query.kidneyId;
//     if(!usernameValidator(req.query.username,req.query.password)){
//     res.status(403).json({
//         "msg":"user not exist"
//     });
//     return;
// }
//       if(!kidneyIdValidator(req.query.kidneyId)){
//         res.status(411).json({
//             "msg":"the kidney input is wrong"
//         });
//         return;
//       }
//       res.send("Your are absolutely fine ")
// });

// app.listen(3000, () => {
//             console.log("Server is running on port 3000");
//         });


const express=require("express");
const app=express();

function usernameMiddleware(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password;
    
    if(username!="Beauty" || password!="12345"){
        res.status(403).json({
            "msg":"Input is wrong",
        });
    }
    else{
        next();
    }


};

function userKidneyValidator(req,res,next){
    const kidneyId=req.headers.kidneyId;
    if(kidneyId !=1 || kidneyId !=2){
        res.status(403).json({
            "msg":"kidney input is wrong",
        });

    }
    else{
        next();
    }
};

app.get("/health-checkup",usernameMiddleware,userKidneyValidator,function(req,res){
    res.send("your heart is healthy and names is correct")
});

app.get("/kidney-checkup",usernameMiddleware,userKidneyValidator,function(req,res){
    res.send("your heart is healthy and kidneyId is correct")
});

app.get("/heart-checkup",usernameMiddleware,function(req,res){
    res.send("your heart is healthy and kidneyId is correct")
});

app.listen(3000, () => {
                 console.log("Server is running on port 3000");
            });