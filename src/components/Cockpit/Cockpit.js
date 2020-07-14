import React from 'react';
import StyledButton from '../Button/Button';
import './Cockpit.css';

const cockpit = (props) => {

    const assignedclasses = [];

    if(props.persons.length <= 2){
      assignedclasses.push('blue');      // classes = ['blue'];
    }
    if(props.persons.length <= 1){
      assignedclasses.push('bold');      //classes = ['blue' , 'bold'];
    }

    return (
        <div>
        <h1 className = {assignedclasses.join(' ')}>{props.title}</h1>
        <StyledButton  alt = {props.showPersons} onClick = {props.toggle}>
          Toggle Persons
        </StyledButton>
        <StyledButton  alt = {props.showPersons} onClick = {props.adding.bind(this)}>
          addPerson
        </StyledButton>
        </div>
    );
}

export default cockpit;