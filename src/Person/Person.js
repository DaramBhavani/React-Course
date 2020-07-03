import React from 'react';
//import Radium from 'radium';
import styled from 'styled-components';
import styles from './Person.css';

const StyledDiv =  styled.div`       
        color:blue;
        border:2px solid grey;
        margin:16px auto;
        padding:5px;
        width:50%;

        @media (min-width : 500px) {
            width : 450px;
        }
`;

const person = (props) => {

    // const style = {
    //     '@media (max-width :500px)' : {
    //         width : '450px'
    //     }
    // };

    return (
        //<div className = "personDetails" style = {style}>
        <div>
        <StyledDiv>
           <p onClick = {props.click}>My Rank {props.rank} , My Name {props.name} and My age {props.age}</p>
           <p>{props.children}</p>
           <input type="text" onChange = {props.changed} value = {props.name}/>
        </StyledDiv>
        </div>
        //</div>
    );
};

export default person;