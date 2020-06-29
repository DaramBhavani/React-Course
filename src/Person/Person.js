import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {

    const style = {
        '@media (max-width :500px)' : {
            width : '450px'
        }
    };

    return (
        <div className = "personDetails" style = {style}>
           <p onClick = {props.click}>My Rank {props.rank} , My Name {props.name} and My age {props.age}</p>
           <p>{props.children}</p>
           <input type="text" onChange = {props.changed} value = {props.name}/>
        </div>
    );
};

export default Radium(person);