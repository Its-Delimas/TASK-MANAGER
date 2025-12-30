import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,requires:true},
},{
    timestamps:true,
})

const task = mongoose.model("task",TaskSchema);

export default task;