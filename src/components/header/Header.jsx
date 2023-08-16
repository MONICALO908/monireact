import { useState } from "react"
import "./Header.css"
import { useForm } from "react-hook-form"

export function Header({create}) {

    const {register, formState:{errors},handleSubmit, reset}= useForm({mode:"onChange"})
    // let newTask

    return <>
        <h1 className="app-title">Todo App</h1>
        <form onSubmit={handleSubmit((task)=>{create(task);reset();})} className="input-box">
            <input className="input" type="text" name="name"
                placeholder="Add your new todo"
                {...register("name",{ required:true, minLength : 3 })}
            />
            <input type="text" className="input" name="description"
                placeholder="Todo description"
                {...register("description",{})}
            />
            <button className="header-button" >+</button>
        </form>
        {errors.name && <span>Write more than 3 letters </span>}
    </>


    // function handle(event){
    //     newTask = event.target.value
    // }
}



