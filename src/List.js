import React from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";

function List(props) {

    const items = useSelector(state => state);

    return(
        <ul>
            {items.map(item =>
                <ListItem item={item} id={item.id} key={item.id}></ListItem>
            )}
        </ul>
    )
    
}

export default List;