 import Task from "../Models/TaskModel.js"
 import asyncwrapper from "../Middleware/AsyncWrapper.js"
 
 const getAllTasks = asyncwrapper( async (req,res) =>
{
   
     const tasks = await Task.find({})
     res.status(200).json({tasks})
   
}   
 )

 const createTasks =asyncwrapper(async (req,res) => {
        const task = await Task.create(req.body);
    res.status(201).json({task})
    
})
 const singleTasks =asyncwrapper(async (req,res) => {
   
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID})
        if(!task)
        {
            return res.status(404).json({msg:`No Task with id: ${taskID}`})
        }
        res.status(200).json({task})
    
})
const deleteTasks =asyncwrapper( async (req,res) => {

        const {id:taskID} = req.params
     const task = await Task.findOneAndDelete({_id:taskID});
     if(!task)
     {
      return res.status(404).json({msg:`No Task with id: ${taskID}`})
    }
     res.status(200).json({task})
  
})
const editTasks = asyncwrapper (async (req,res) => {

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

})

export {getAllTasks,createTasks,singleTasks,editTasks,deleteTasks};