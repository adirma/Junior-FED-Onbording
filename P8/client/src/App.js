import { MainAppTitle } from "./components/MainAppTitle";
import { AppContainer } from "./components/AppContainer";


import { Button_styled } from "./components/Button_styled";
import TaskTableLabels from "./components/TaskTableLabels";
import TableRow from "./components/TableRow";
import { useState ,useEffect} from "react";
import AddNewTask from "./components/AddNewTask";
import LoginBar from "./components/LoginBar";
import {init,addNewTask,deleteServerTask} from './components/script/index.js'

import "./components/css/TaskTableLabels.css";
import "./components/css/TableRow.css";
import "./components/css/AddNewTask.css";
import "./components/css/LoginBar.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const deleteTask = async (title) => {
    await deleteServerTask(title);
    setTasks(tasks.filter((task) => task.title !== title));
    const index = tasks.indexOf(title);
    if (index > -1) tasks.tasks.splice(index, 1);
  };

  const addTask = (title,expiredDate) => {
    addNewTask(expiredDate,title);
   const task= {
      title: title,
      expiredDate: expiredDate,
      updateDate: new Date().toLocaleDateString().split(",")[0],
      status: "active",
      mark: "regular_row",
    };

    setTasks([...tasks, task]);
  };

 useEffect(async () => {
   const data=await init();
   console.log(data)
   setTasks(data)
 },[])

  return (
    <AppContainer
      style={{
        height: "100%",
        position: "absolute",
        left: "0px",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <MainAppTitle>TODO List</MainAppTitle>
      <center>
        <AddNewTask
                  insertFunction={addTask}
        ></AddNewTask>
        <br />
        <br />
          <LoginBar />
        <br />
        <TaskTableLabels
          tasks={tasks}
          deleteFunction={deleteTask}

        ></TaskTableLabels>
      </center>
    </AppContainer>
  );
    }


export default App;
