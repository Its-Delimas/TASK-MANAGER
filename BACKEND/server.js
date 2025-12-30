 import express from "express"
 import dotenv from "dotenv"
 import connectDB from "./config/db.js";
import router from "./routes/taskroutes.js";

 const app = express();

 dotenv.config()
 connectDB();

 app.use('api/Task',router)


const PORT=process.env.PORT || 3000;

const server = app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});

server.on("error",(error)=>{
    console.error("Error starting server ",error.message)
});