import React , {Component} from 'react';
//import Radium from 'radium';
import styled from 'styled-components';
//import styles from './Person.css';

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

class Person extends Component {

    // const style = {
    //     '@media (max-width :500px)' : {
    //         width : '450px'
    //     }
    // };

    render(){

        console.log('[Person.js] rendering...');

        return (
            //<div className = "personDetails" style = {style}>
            <div>
            <StyledDiv>  
                   
                    <p onClick = {this.props.click}>My Rank {this.props.rank} , My Name {this.props.name} and My age {this.props.age}</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange = {this.props.changed} value = {this.props.name}/>              
           
            </StyledDiv>
            </div>
            //</div>
        );

    }
};

export default Person;