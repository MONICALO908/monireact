import { useEffect, useState } from "react"

export default function useTaskList(){
    const [tasksState, setTasksState] = useState((localStorage.getItem('tasksState')).split("_"))

    useEffect(() => {
        localStorage.setItem('tasksState', tasksState.join("_"));
    }, [tasksState]);

    function create (newTask){
        setTasksState(tasksState => [...tasksState, newTask])
    }
    function deleteTask(index){
        const newArray = [...tasksState];
        newArray.splice(index, 1);
        setTasksState(newArray);
    }
    function clear(){
        setTasksState([])
    }

    return [tasksState,create,deleteTask,clear]

}