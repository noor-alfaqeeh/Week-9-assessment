import React, { Component } from 'react';
import './App.css';
import Output from './UserOutput'
import InputElement from './UserInput'

class App extends Component {
 
  render() { 
  return (
    <div >
      
      <InputElement/>
      <Output/>
      <Output/>
  
    </div>
         );
        }
    }
     
    export default App;
