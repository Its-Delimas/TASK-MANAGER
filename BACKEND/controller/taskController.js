import task from "../model/taskModel.js"

//get all notes
export const getAllTask = async (req,res)=>{
    try{
        const result = await task.find()
        res.status(200).json(result)
    } catch (err){
        res.status(500).json({mssg:"Error encountered, check console"})
        console.log(error)
    }
}
//add new note
export const addNewTask = async (req,res)=>{
    try{
        const task = await task.create(
            {title:req.body.title},
            {content:req.body.content},
            {completed:false},
        )
        res.status(200).json(task)
    }catch(error){
        res.status(500).json({mssg:"Error encountered, check console"})
        console.log(error)
    }
    
}
//delete Note
export const deleteTask = async (req,res)=>{
    
}
//update Note
export const updateATask = async (req,res)=>{
    
}
//get one note
export const getOneTask = async (req,res)=>{

}