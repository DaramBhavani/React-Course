import React from 'react';
import Person from './Person/Person'


const Persons = (props) =>  { 

    console.log('[persons.js] rendering...');

    return  props.persons.map( (person) => {

        return ( 
            <Person 
                click = {props.deleted.bind(this, person.rank)}
                rank = {person.rank} 
                name = {person.name} 
                age = {person.age} 
                key = {person.rank}  
                changed = {(event) => props.changed(event, person.rank)}
            />
        );

    });         

}

export default Persons;