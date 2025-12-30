 import express from "express"
 import dotenv from "dotenv"

 dotenv.config()

const app = express();

const PORT=process.env.PORT || 3000;

const server = app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});

server.on("error",(error)=>{
    console.error("Error starting server ",error.message)
});