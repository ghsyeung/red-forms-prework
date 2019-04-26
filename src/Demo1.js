import React from 'react';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import "./SimpleForm.css";
import {Source1} from './Source1';

const desc = `
Let's warm up with a React component with states. 

Use the debugger to help understand this code.

1. What are the states in this component?
2. What method is called when the *Submit* button is clicked?
3. Let's fill out the form
   - does email field get validated if there's an error in the name field?
  
`;

export function Description1() {
  return (
    <div className="description">
      <ReactMarkdown source={desc}/>
      <Link to="/e2">Demo 2</Link>
    </div>
  );
}

export function Demo1() {
  return (
    <div className="demo">
    <div className="left">
      <Description1/>
    </div>
    <div className="right">
      <Source1/>
    </div>
    </div>
  );
}
