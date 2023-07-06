
import { Header}  from "./components/header/Header"
import {TaskList} from "./components/taskList/TaskList"
import "./app.css"
import useTaskList from "./hooks/useTaskList"

function App() {

  const [tasksState, create, deleteTask, clear] = useTaskList()

  return (
    <div className="screen">
      <div className="app-main">
        <Header create={create}></Header>
        <TaskList tasks={tasksState} deleteTask={deleteTask} clear={clear}></TaskList>
      </div>
    </div>
     
  )
  } 
  export default App
