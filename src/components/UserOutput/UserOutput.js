import React from "react";
import './UserOutput.css';

const userOutput = (props) => {
    return(
        <div className = "stylingOutput">
            <p>Good Morning {props.userName}</p>
            <p>Good Afternoon {props.userName}</p>
        </div>
    );
}
export default userOutput;