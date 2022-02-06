import Express from "express";
import * as todo from './toDoList.js';
import cors from "cors";
const router = Express();
const port=3000;

router.use(
    cors({
        origin:"*",
    })
)

router.listen(port,()=>console.log("listen to port "+port));

router.post('/',(req,res)=>{
    res.send("Hello world")
})

router.get('/',(req,res)=>{
    res.send("Hello")
})

router.post('/addNewTask/:title-:date',(req,res)=>{
   const param=req.params;
   const title=param.title;
   const date=param.date;
   const tasks=todo.addNewTask(title,date);
   console.log(param,tasks)
   res.send(tasks)
})

router.post('/removeTask/:title',(req,res)=>{
    const param=req.params;
    const title=param.title;
    const tasks=todo.removeTask(title);
   res.send(tasks)
})

router.post('/removeMarkTask/:title',(req,res)=>{
    const param=req.params;
    const title=param.title;
    const tasks=todo.removeMarkTask(title);
    res.send(tasks)
})

router.post('/markTask/:title',(req,res)=>{
    const param=req.params;
    const title=param.title;
    const tasks=todo.markTask(title);
    res.send(tasks)
})

router.get('/getAllTasks',(req,res)=>{
    const tasks=todo.getAllTask();
    res.send(tasks)
})



