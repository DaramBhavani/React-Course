import React from "react";
import './UserInput.css';

const userInput = (props) => {
    const styling = {
        border:'2px solid gray'
    }
    return(
        <div className = "stylingInput">
            <input type = "text" onChange = {props.input} 
            value = {props.userName} style = {styling}></input>
        </div>
    );
}
export default userInput;