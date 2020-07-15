import React , {useEffect} from 'react';
import StyledButton from '../Button/Button';
import './Cockpit.css';

const cockpit = (props) => {

  //useEffect - by passing empty array

    useEffect(() => {
      console.log("[Cockpit.js] useEffect");
      //HTTp Request...
      // setTimeout(() => {
      //   alert('saved data to could');
      // },1000);
      return () => {
        console.log('[Cockpit.js] clean up work in useEffect');
      }
    },[]);

    //useEffect 

    useEffect(() => {
      console.log("[Cockpit.js] 2nd useEffect");
      return () => {
        console.log('[Cockpit.js]  2nd clean up work in useEffect');
      }
    });


    const assignedclasses = [];

    if(props.personsLength <= 2){
      assignedclasses.push('blue');      // classes = ['blue'];
    }
    if(props.personsLength <= 1){
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