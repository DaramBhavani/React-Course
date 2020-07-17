import React , {Component} from 'react';
//import Radium from 'radium';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';
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

    static contextType = AuthContext;

    constructor(props){
        super();
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render(){

        console.log('[Person.js] rendering...');

        return (
            //<div className = "personDetails" style = {style}>
            <div>
            <StyledDiv> 
                {this.context.authenticated ? <p>Authenticated!!</p> : <p>Log in</p>}
                <p onClick = {this.props.click}>My Rank {this.props.rank} , My Name {this.props.name} and My age {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text"
                    ref = {this.inputElementRef} 
                    onChange = {this.props.changed} 
                    value = {this.props.name}
                />                         
            </StyledDiv>
            </div>
            //</div>
        );

    }
};

Person.propTypes = {
    click:PropTypes.func,
    rank:PropTypes.number,
    name:PropTypes.string,
    age:PropTypes.number,
    changed:PropTypes.func
};

export default Person;