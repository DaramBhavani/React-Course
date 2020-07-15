import React , {Component} from 'react';
import Person from './Person/Person'


class Persons extends Component { 

    static getDerivedStateFromProps(props,state){
        console.log('[persons.js] getDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[persons.js] shouldComponentUpdate');
        if(nextProps.persons !== this.props.persons){
        return true;
        }
        else{
            return false
        }
    }

    getSnapshotBeforeUpdate(prevprops, prevState){
        console.log('[persons.js] getSnapshotBeforeUpdate');
        return null;
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    componentDidUpdate(){
        console.log('[Persons.js] componentDidUpdate');
    }

    render(){

        console.log('[persons.js] rendering...');

        return this.props.persons.map( (person) => {

            return ( 
                <Person 
                    click = {this.props.deleted.bind(this, person.rank)}
                    rank = {person.rank} 
                    name = {person.name} 
                    age = {person.age} 
                    key = {person.rank}  
                    changed = {(event) => this.props.changed(event, person.rank)}
                />
            );

        });
        
    }

}

export default Persons;