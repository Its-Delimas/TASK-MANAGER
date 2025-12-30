import moongoose from 'mongoose'

const connectDB = async()=>{
    try{
        await moongoose.connect(process.env.MONGO_URI)
        console.log("database connected sucessfully")
    } catch(err){
        console.log("ERROR : ",error)
        process.exit(1);
    }
}

export default connectDB;