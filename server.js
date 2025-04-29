
const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");

const path=require("path");
const portfolioRoute=require("./routes/portfolioRoute.js")
dotenv.config();
//rest object
const app=express();
//middelwears
app.use(express.static(path.join(__dirname,'./client/build')))
app.use(cors());
app.use(express.json());
//static files
// app.use(express.static(path.join(__dirname,'./client/build')));
app.use("/api/v1/portfolio",portfolioRoute);

//routes
app.get('*',function (req,res){
res.sendFile(path.join(__dirname,'./client/build/index.html'))
});
// // app.get("*",function (req,res){
// res.sendFile(path.join(__dirname,'./client/build/index.html'))

// });

// app.get("/",(req,res)=>{
// res.send("<h1>Welcome</h1>");

// })



//port
const port=process.env.PORT || 5000;



//listen
app.listen(port,()=>{
    console.log("Server started");
});