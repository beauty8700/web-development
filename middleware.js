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


// const express=require("express");
// const app=express();

// function usernameMiddleware(req,res,next){
//     const username=req.headers.username;
//     const password=req.headers.password;
    
//     if(username!="Beauty" || password!="12345"){
//         res.status(403).json({
//             "msg":"Input is wrong",
//         });
//     }
//     else{
//         next();
//     }


// };

// function userKidneyValidator(req,res,next){
//     const kidneyId=req.headers.kidneyId;
//     if(kidneyId !=1 || kidneyId !=2){
//         res.status(403).json({
//             "msg":"kidney input is wrong",
//         });

//     }
//     else{
//         next();
//     }
// };

// app.get("/health-checkup",usernameMiddleware,userKidneyValidator,function(req,res){
//     res.send("your heart is healthy and names is correct")
// });

// app.get("/kidney-checkup",usernameMiddleware,userKidneyValidator,function(req,res){
//     res.send("your heart is healthy and kidneyId is correct")
// });

// app.get("/heart-checkup",usernameMiddleware,function(req,res){
//     res.send("your heart is healthy and kidneyId is correct")
// });

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });


// const express=require("express");
// const app=express();

// let numbercalculate=0;
// function Calculator(req,res,next){
//     numbercalculate++;
//     console.log(numbercalculate);
//     next();

// }

// app.use(Calculator)
// app.post("/health-checkup",function(req,res){
//     res.json({
//         "msg": "hi there"
//     })
// });

// app.get("/kidney-checkup",function(req,res){
//     res.send("your heart is healthy and kidneyId is correct")
// });

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });


// const express=require("express");
// const app=express();

// const z= require("zod");

// app.use(express.json());

// app.post("/health-checkup",function(req,res){
//     const kidneys=req.query.kidneys;
//     const kidneyLength=kidneys.length;
//     res.send("You have"+kidneyLength+"good kidneys");
// });

// app.use(function(err,req,res,next){
//     res.json({
//         msg: "Something is wrong",
//     })
// })

// app.listen(3000,()=>{
//     console.log("server is running");
// })


//////////////////////use of zod //////////////////////////////

// const express=require("express");
// const zod= require("zod");
// const app=express();


// //const schema=zod.array(zod.number());

// const schema=zod.object({
//    email:zod.string(),
//    password:zod.string(),
//    country:zod.literal("IN").or(zod.literal("US")),

// })
// app.use(express.json());

// app.post("/health-checkup",function(req,res){
//     const kidneys=req.body.kidneys;
//     const response=schema.safeParse(kidneys)
//     if(!response.success){
//         res.status(411).json({
//             msg: "input is invalid"
//         })
//     }
//     else{
//     res.send({
//         response
//     })
// }
// });



// app.listen(3000,()=>{
//     console.log("server is running");
// })



///////explain zod that why we use it ///////////////
//so when you want to validate that if array of strings with atleast
//1 input ,return true and else return false

//1st method
/*
function validateInput(arr){
if(typeof arr=="object" && arr.length >=1 && typeof arr[0]=="number")
and many likhna padhta hai 
*/


/*
but in zod hm bs ye likhte hai
*/
/*const zod=require("zod");

function validateInput(arr){
const schema=zod.array(zod.number());
const response=schema.safeParse(arr);
console.log(response);
}
validateInput([1,2,3]);
*/
const express=require("express")
const app=express()  //app.post ko define krne ke liye we use call http and express
const zod=require("zod");

function validateInput(obj){
const schema=zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
})
const response=schema.safeParse(obj);
console.log(response);
}

//written by myself to check some input is valid is or not
// validateInput({
//     email:"beauty45singh@gmail.com",
//     password:" 127654322"
// });

//or if you call http server you can also check by http server

app.post("/login",function(req,res){
    const response=validateInput(req.body)
    if(!response.success){
        res.json({
        msg:"your input is invalid"
        })
        return;
    }

})

app.listen(3000);