import { useState } from "react";
import "./Task.css"

export default function Task({ todo, deleteTask, index }) {

    const [update, setUpdate] = useState(false)

    return <div className="boton-check-delete">
        <div className="texts">
            <input type="radio" name={"radio-button" + index} checked={update} />
            <label htmlFor={"radio_button" + index}></label>
            <p className="">{todo}</p>
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
