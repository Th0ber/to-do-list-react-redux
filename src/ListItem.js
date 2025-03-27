import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "./listAction";

function ListItem(props) {

    const dispatch = useDispatch();

    return(
        <li className="item">
            {props.item.text}
            <div>
                <label>
                    <input type="checkbox"></input>
                    <span class="custom-checkbox"></span> Done
                </label>
                <button onClick={() => { dispatch(deleteItem(props.id)) }} className="delete-btn">🗑 Delete</button>
            </div>
        </li>
    )
    
}

export default ListItem;