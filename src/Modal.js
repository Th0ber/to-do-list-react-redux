import React from "react";

function Modal(props) {

    function hideModal(e) {
        let target = e.target;
        if(target.id === "modal") {
            props.onHideModal();
        }
    }

    return(
        <div id="modal" onClick={hideModal} className={props.show ? "modal" : "modal hide"}>
            <div className="cardModal">{props.children}</div>
        </div>
    )

}

export default Modal;