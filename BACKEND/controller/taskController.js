import task from "../model/taskModel.js"

//get all Tasks
export const getAllTask = async (_,res)=>{
    try{
        const result = await task.find()
        res.status(200).json(result)
    } catch (error){
        res.status(500).json({mssg:"Error encountered, check console"})
        console.log(error)
    }
}
//add new Tasks
export const addNewTask = async (req,res)=>{
    try{
        const{title,content}=req.body;
        //Model.create() accepts ONE object, not multiple objects.
        const newTask = await task.create(
            {title,content,completed:false},
        )
        res.status(200).json(newTask)
    }catch(error){
        res.status(500).json({mssg:"Error encountered, check console"})
        console.log(error)
    }
    
}
//delete Tasks
export const deleteTask = async (req,res)=>{
   // const ID = req.body.params; -id, comes from the URl and no the body...
   const { ID }=req.params;
    if(!ID) return res.status(404).json({message:"couldnt find element with that ID"})
    try{
            await task.findByIdAndDelete(ID)
            res.status(200).json({message:"Deleted successfully"})
    }catch(error){
        res.status(500).json({message:"error deleting code",error})
        console.log(error);
    }
    
}
//update Tasks
export const updateATask = async (req,res)=>{
      const { ID }=req.params;
    if(!ID) return res.status(404).json({message:"The note you are trying to access doesnt exist"})
    try {
            //always validate input
                if(!req.body.title){
                    return res.status(400).json({message:"Title is required"})
                }
        const updatedResult = await task.findByIdAndUpdate(ID,{title:req.body.title,content:req.body.content,completed:req.body.completed},
            {new:true,runValidators:true}
        );
        res.status(200).json(updatedResult)
    } catch (error){
        res.status(500).json({message:"error deleting code"})
        console.log(error);
    }
}
//get one Tasks
export const getOneTask = async (req,res)=>{
      const { ID }=req.params;
    if(!ID) return res.status(404).json({message:"The note cant be found"})
        try{
            const result = await task.findById(ID)
            res.status(200).json(result);
        }catch(error){
            res.status(500).json({message:"Error encountered",error})
            console.log(error);
        }

}