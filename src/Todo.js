import React, { useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import List from "./List";
import Modal from "./Modal";

import { createStore } from "redux";
import { Provider } from "react-redux";

import listReducer from "./listReducer";

const SAVED_ITEMS = "savedItems";

function persistState(state) {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
}

function loadState() {
    const actualState = localStorage.getItem(SAVED_ITEMS);
    if(actualState) {
        return JSON.parse(actualState);
    }
    else {
        return [];
    }
}

const store = createStore(listReducer, loadState());

store.subscribe(() => {
    persistState(store.getState());
})

function Todo() {

    const [showModal, setShowModal] = useState(false);

    function onHideModal(e) {
        setShowModal(false);
    }
    
    return(
        <div className="container">

            <Provider store={store}>

                <header className="header">
                    <h1>To-do list</h1>
                    <button className="addButton" onClick={() => { setShowModal(true) }}>+</button>
                </header>

                <List></List>

                <Modal show={showModal} onHideModal={onHideModal}>
                    <TodoForm></TodoForm>
                </Modal>

            </Provider>

        </div>
    );

}

export default Todo;