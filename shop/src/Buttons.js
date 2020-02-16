import React from "react";
import "./Styles.css";

function Buttons(props){
    return(
        <div className="Button_frame">
            <button className="newbutton" >{props.text}</button>
        </div>
    )
}
export default Buttons