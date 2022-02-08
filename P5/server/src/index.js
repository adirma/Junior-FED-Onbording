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

router.use(Express.json());

router.listen(port,()=>console.log("listen to port "+port));

router.post('/addNewTask/:title-:date',(req,res)=>{
   const param=req.params;
   const title=param.title;
   const date=param.date;
   const tasks=todo.addNewTask(title,date);
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


router.get('/getAllUserTasks/:userid',(req,res)=>{
    const param=req.params;
    const userid=param.userid;
    const tasks=todo.getUserTable(userid);
    res.send(tasks)
})

router.post('/setUserTasks/:userid',(req,res)=>{
    const param=req.params;
    const userid=param.userid;
    let strTable=req.body.table.toString();
   const tasks=todo.setUserTable(userid,strTable);
})



