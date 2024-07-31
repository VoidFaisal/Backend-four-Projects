 import Task from "../Models/TaskModel.js"
 
 
 const getAllTasks = async (req,res) =>
{
   try {
     const tasks = await Task.find({})
     res.status(200).json({tasks})
   } catch (error) {
    res.status(500).json({msg:error})
   }
}   

 const createTasks =async (req,res) => {
    try {
        const task = await Task.create(req.body);
    res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
 const singleTasks =async (req,res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID})
        if(!task)
        {
            return res.status(404).json({msg:`No Task with id: ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const deleteTasks = async (req,res) => {
    try {
        const {id:taskID} = req.params
     const task = await Task.findOneAndDelete({_id:taskID});
     if(!task)
     {
      return res.status(404).json({msg:`No Task with id: ${taskID}`})
    }
     res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg:error})
}
}
const editTasks = async (req,res) => {
try {
    const {id:taskID} = req.params;
    const task =await Task.findOneAndUpdate({_id:taskID},req.body,{
        new:true,
        runValidators:true
    })
    if(!task)
    {
        return res.status(404).json({msg:`No Task Exists By The ID:${taskID}`})
    }
    res.status(200).json({task})
} catch (error) {
    res.status(500).json({msg:error})
}
}

export {getAllTasks,createTasks,singleTasks,editTasks,deleteTasks};