import { useState } from "react"
import { Header}  from "./components/header/Header"
import {TaskList} from "./components/taskList/TaskList"
import "./app.css"

function App() {
  let tasks = [
    "estudiar dos horas al dia",
    "desperta a las 7 am",
    "salir a trabajar a las 9am",
    "meditar 10 minutos en la mañana ",
    "hacer ejercicios de abdomen en la mañana",

  ]
  const [tasksState, setTasksState] = useState(tasks)

  function deleteTask(index){
    const newArray = [...tasksState];
    newArray.splice(index, 1);
    setTasksState(newArray);
  }
  function clear(){
    setTasksState([])
  }

  return (
    <div className="screen">
      <div className="app-main">
        <Header setTasksState={setTasksState}></Header>
        <TaskList tasks={tasksState} deleteTask={deleteTask} clear={clear}></TaskList>
      </div>
    </div>
     
  )
  } 
  export default App
