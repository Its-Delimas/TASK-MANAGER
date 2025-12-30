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