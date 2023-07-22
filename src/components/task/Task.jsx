import { useState } from "react";
import "./Task.css"

export default function Task({ todo, deleteTask, index }) {

    const [update, setUpdate] = useState(false)

    return <div className="boton-check-delete">
        <div className="texts">
            <input type="radio" name={"radio-button" + index} checked={update} onChange={e => setUpdate(e.target.checked)}/>
            <label htmlFor={"radio_button" + index}></label>
            <div>
                <h2 className="">{todo.name}</h2>
                <p>{todo.description}</p>
            </div>
        </div>
        <div className="buttons" >
            <button onClick={() => setUpdate(true)} >
                <img src="../../src/assets/editar.png" alt="" style={{ width: 15 + "px" }} />
            </button>
            <button onClick={() => deleteTask(index)}>
                <img src="../../src/assets/eliminar.png" alt="" style={{ width: 15 + "px" }} />
            </button>
        </div>
    </div>;


}
