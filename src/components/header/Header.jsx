import { useState } from "react"
import "./Header.css"

export function Header({create}) {

    let newTask

    return <>
        <h1 className="app-title">Todo App</h1>
        <div className="input-box">
            <input className="input" type="text"
                placeholder="Add your new todo"
                onChange={handle}
            />
            <button className="header-button" onClick={()=> create(newTask)}>+</button>
        </div>
    </>


    function handle(event){
        newTask = event.target.value
    }
}



