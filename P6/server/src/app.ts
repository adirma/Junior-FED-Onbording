export {}
import express from 'express';
import * as mytodo from './toDoList';
import mycors from "cors";
const myRouter=express();
const myPort=3000;


myRouter.use(
    mycors({
        origin:"*",
    })
)

myRouter.use(express.json());

myRouter.listen(myPort,()=>console.log("listen to port "+myPort));

myRouter.post('/addNewTask/:title-:date',(req,res)=>{
   const param=req.params;
   const title=param.title;
   const date=param.date;
   const tasks=mytodo.addNewTask(title,date);
   res.send(tasks)
})

myRouter.post('/removeTask/:title',(req,res)=>{
    const param=req.params;
    const title=param.title;
    const tasks=mytodo.removeTask(title);
   res.send(tasks)
})

myRouter.post('/removeMarkTask/:title',(req,res)=>{
    const param=req.params;
    const title=param.title;
    const tasks=mytodo.removeMarkTask(title);
    res.send(tasks)
})

myRouter.post('/markTask/:title',(req,res)=>{
    const param=req.params;
    const title=param.title;
    const tasks=mytodo.markTask(title);
    res.send(tasks)
})

myRouter.get('/getAllTasks',(req,res)=>{
    const tasks=mytodo.getAllTask();
    res.send(tasks)
})


myRouter.get('/getAllUserTasks/:userid',(req,res)=>{
    const param=req.params;
    const userid=param.userid;
    const tasks=mytodo.getUserTable(userid);
    res.send(tasks)
})

myRouter.post('/setUserTasks/:userid',(req,res)=>{
    const param=req.params;
    const userid=param.userid;
    let strTable=req.body.table.toString();
   const tasks=mytodo.setUserTable(userid,strTable);
})

