import { useState } from "react";
import "./Task.css"
import { IconButton } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

export default function Task({ todo, deleteTask, index }) {

    const [update, setUpdate] = useState(false)

    return <div className="boton-check-delete">
        <div className="texts">
            <input type="radio" name={"radio-button" + index} checked={update} onChange={e => setUpdate(e.target.checked)}/>
            <label htmlFor={"radio_button" + index}></label>
            <div>
                <h3 className="">{todo.name}</h3>
                <p>{todo.description}</p>
            </div>
        </div>
        <div className="buttons" >
            <IconButton
                onClick={() => setUpdate(true)}
                colorScheme='teal'
                aria-label='Update'
                h={"8"}
                icon={<EditIcon/>}
            />
            <IconButton
               onClick={() => deleteTask(index)}
                colorScheme='teal'
                aria-label='Delete'
                h={"8"}
                marginLeft={"2"}
                icon={<DeleteIcon/>}
            />
        </div>
    </div>;


}
