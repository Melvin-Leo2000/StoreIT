import React from 'react'
import "./Popup.css"


const Popup = props => {
    return (<div class="popup-box" onClick={props.handleClose}>
        <div class="box-popup" onClick={props.handleClose}>
        {props.content}
        </div>
    </div>)
}

export default Popup;