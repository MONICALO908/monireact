
import { Header } from "../header/Header"
import { TaskList } from "../taskList/TaskList"
import "./appTaskList.css"
import useTaskList from "../../hooks/useTaskList"
import { Box } from "@chakra-ui/react"

function AppTaskList() {

  const [tasksState, create, deleteTask, clear] = useTaskList()

  return (
    <div className="screen">
      <Box borderRadius={"15"} w={"500"} padding={"50"} bgColor={"#92dcdc"}>
        <Header create={create}></Header>
        <TaskList tasks={tasksState} deleteTask={deleteTask} clear={clear}></TaskList>
      </Box>
    </div>

  )
}
export default AppTaskList
