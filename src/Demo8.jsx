import React from 'react';
import ReactMarkdown from 'react-markdown';
import "./SimpleForm.css";
import {Source8} from './formSource/Source8';

const desc = `
With **react-final-form** and **MUI**!!

For more examples of MUI, see

https://material-ui.com/getting-started/page-layout-examples/
`;

export function Description8() {
  return (
    <div className="description">
      <ReactMarkdown source={desc}/>
    </div>
  );
}

export function Demo8() {
  return (
    <div className="demo">
      <div className="left">
        <Description8/>
      </div>
      <div className="right">
        <div className="exercise-8">
          <h1>Demo 8</h1>
          <Source8/>
        </div>
      </div>
    </div>
  );
}
