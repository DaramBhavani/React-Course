import React, { Component } from 'react';
//import React, {useState} from 'react';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Person from './Person/Person.js';
//import UserInput from './UserInput/UserInput.js';
//import UserOutput from './UserOutput/UserOutput.js';
//import ValidationComponent from './ValidationComponent/ValidationComponent'


//************* Class Component ******************/

class App extends Component {
  state = {
    persons:[
      {rank:1, name : "Bhavani" , age : "27"},
      {rank:2, name : "Rakesh" , age : "29"},
      {rank:3, name : "Sai" , age :  "25"}
    ],
    otherState : 'some other value',
    showPersons : false
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons:[
        {name : newName, age : "27"},
        {name : "rakesh", age : "30"},
        {name : "saikumar", age :  "25"}
      ]
    });
  };

  deletePersonHandler = (rank) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    console.log(`rank = ${rank}, will be deleted`);
    let filteredItems = persons.filter((person) => {
      console.log(person.rank , rank);
      return person.rank !== rank;
    })
    this.setState({persons: filteredItems});
    console.log(filteredItems); 
  }

  nameChangeHandler = (event , rank) => {
    // event contains name 
    /// rank is the unique identifier
    console.log(event.target.value,rank);
    const persons =  [...this.state.persons];
    const modifiedPersonArr = persons.map((person) => {
      console.log(person);
      // if rank of person & passed rank matches 
      if (person.rank === rank){
        person.name = event.target.value; // modified the existing name with new value
        
      }
      return person;       
    });   
    this.setState({ persons:modifiedPersonArr})
    console.log(`modified persons` , persons);   
  };

  togglePersonsHandler = () => {
    const doesShow 
    = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  };

  addingObjectInArray = () => {
    const persons = [...this.state.persons];
    persons.push({rank:4,name:'rahul',age:23});
    this.setState({persons});
  }

 render() {

    const style = {
      border: '2px solid gray',
      backgroundColor : 'darkgreen',
      cursor: 'pointer',
      fontSize: '15px',
      padding:'5px',
      color:'white',
      ':hover': {
        backgroundColor : 'green',
        border : '2px solid darkgray'
      }
    }
    
    //{this.deletePersonHandler.bind(this, person.rank)} 

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map( (person) => {
            return <Person click = {this.deletePersonHandler.bind(this, person.rank)}
            rank = {person.rank} name = {person.name} age = {person.age} 
            key = {person.rank}  changed = {(event) => this.nameChangeHandler(event, person.rank)}/>;
          })}
          {/* <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
          <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}/>
          <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} 
          click = {this.switchNameHandler.bind(this,'vani')}
          changed = {this.nameChangeHandler}>My Hobbies : cricket</Person> */}
        </div>
      );
      style.backgroundColor = "red";
      style[':hover'] = {
        backgroundColor : "orangered",
      };
    }

    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push('blue');      // classes = ['blue'];
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');      //classes = ['blue' , 'bold'];
    }

  
    return (
      <StyleRoot>
      <div className="App">
        <h1 className = {classes.join(' ')}>HI i'm react app</h1>
        <button style = {style} className = "full" 
        onClick = {this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        <button className = "btn" onClick = {this.addingObjectInArray.bind(this)}>addPerson</button>
      </div>
      </StyleRoot>
    );
    //return React.createElement("div",{className:'App'},React.createElement("h1",{className:'header'},"React App"));
  }
}

export default Radium(App);


//************ functional component**************//

// const App = () => {

//   const [currentState, modifierState] = useState({person:
//     [
//       {name : "bhavani" , age : "27"},
//       {name : "rakesh" , age : "29"},
//       {name : "sai" , age :  "25"}
//     ],
//     otherState : 'some other value'
//   });

//   console.log(currentState);

//   const switchNameHandler = () => {
//     modifierState({
//       person:[
//         {name : "bhavanidaram" , age : "27"},
//         {name : "rakesh" , age : "30"},
//         {name : "saikumar" , age :  "25"}
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <h1>HI i'm react app</h1>
//       <button onClick = {switchNameHandler} >Switch Here</button>
//       <Per 
//         name = {currentState.person[0].name} 
//         age = {currentState.person[0].age}/>
//       <Per 
//         name = {currentState.person[1].name}
//         age = {currentState.person[1].age}/>
//       <Per 
//       name = {currentState.person[2].name} 
//       age = {currentState.person[2].age}>My Hobbies : cricket</Per>
//    </div>
//   );
  
// }
// export default App;


//******************** Example 2 *******************//


// class App extends Component{

//   state = {
//     userInput : ''
//   }

//   inputChangeHandler = (event) => {
    
//     this.setState({userInput : event.target.value});

//   }

//   render(){

//     return(

//       <div>
//       <input type = "text" 
//       onChange = {this.inputChangeHandler} 
//       value = {this.state.userInput} />
//       <p>{this.state.userInput}</p>
//       <ValidationComponent inputLength = {this.state.userInput.length}/>
//       </div>

//     );
//   }
// }
// export default App;


//********************** Example 1*******************//

// class App extends Component{

//   state = {
//     userName : "Bhavani"
//   }

//   nameHandler = (event) =>{
//     this.setState({userName : event.target.value});
//   }

//   render(){

//     const styling = {
//       color:'blue',
//       fontSize:'20px',
//       textAlign:'center',
//       textTransform:'uppercase',
//     };
    
//     return(
//       <div>
//         <UserOutput style = {styling} userName = {this.state.userName}/>
//         <UserOutput style = {styling} userName = {this.state.userName}/>
//         <UserOutput style = {styling} userName = "Bhavani"/>
//         <UserInput input = {this.nameHandler} userName = {this.state.userName}/>
//       </div>
//     )
//   }
// }
// export default App;


