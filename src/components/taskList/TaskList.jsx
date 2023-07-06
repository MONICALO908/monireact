import Task from "../task/Task";

export function TaskList ({tasks, deleteTask, clear}) {
    return <div className="">
        {
        tasks.map((task, i)=>{
            
            return <Task todo={task} deleteTask={deleteTask} key={i}  index={i}></Task>
        })}
        <p>faltan tareas</p>
        <button onClick={clear}>Clear</button>
    </div>;
}