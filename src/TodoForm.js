import React, { useState } from "react";
import { addItem } from "./listAction";
import { useDispatch } from "react-redux";

function TodoForm(props) {

    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }

    function addItemEvent(event) {
        event.preventDefault();
        if(text) {
            dispatch(addItem(text));
            setText("");
        }
        else {
            alert("Digite alguma coisa!");
        }
    }

    return(
        <form>
            <input className="inputItem" onChange={handleChange} type="text" value={text}></input>
            <button className="addBtn" onClick={addItemEvent}>Add</button>
        </form>
    )

}

export default TodoForm;