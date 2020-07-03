import React from 'react';

const ValidationComp = (props) => {
    return(
        <div>
            {props.inputLength}
            <p>Text too short</p>
            <p>Text too long</p>
        </div>
    );
}
export default ValidationComp;