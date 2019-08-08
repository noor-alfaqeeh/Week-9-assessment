import React, { Component } from 'react';
import InputElement from './UserInput';

class Output extends Component {
    state = { 
        theUserName : {InputElement}
     }
    render() { 
        return (
            <React.Fragment>

            <p> Username:{this.props.id}</p>
            <p> Hello world</p>

            </React.Fragment> 
         );
    }
}
 
export default Output;