import { useEffect, useState } from "react"

export default function useTaskList(){
    const localStorageParse = localStorage.getItem('tasksState')
    const [tasksState, setTasksState] = useState(JSON.parse(localStorageParse) ?? [])

    useEffect(() => {
        localStorage.setItem('tasksState', JSON.stringify(tasksState));
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