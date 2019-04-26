import React from 'react';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import "./SimpleForm.css";
import {SuperFormLogic, FormView, FormConfig} from './Source6';

const desc = `
Let's refactor \`Source5\` into 2 different parts.

1. component contains all the change/submit/validation logic
2. component that renders the form (we call this \`FormView\`)

This functionality should not change, we are simply moving code around.
`;

export function Description6() {
  return (
    <div className="description">
      <ReactMarkdown source={desc}/>

      <Link to="/e6">Demo 6</Link>
    </div>
  );
}

export function Demo6() {
  return (
    <div className="demo">
      <div className="left">
        <Description6/>
      </div>
      <div className="right">
        <div className="exercise-6">
          <h1>Demo 6</h1>

          <SuperFormLogic 
            formConfig={FormConfig} 
            render={
              props => (<FormView {...props}/>)
            }/>
        </div>
      </div>
    </div>
  );
}
