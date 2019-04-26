import React from 'react';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import "./SimpleForm.css";
import {Source5} from './Source5';

const desc = `

`;

export function Description5() {
  return (
    <div className="description">
      <ReactMarkdown source={desc}/>

      <Link to="/e6">Demo 6</Link>
    </div>
  );
}

export function Demo5() {
  return (
    <div className="demo">
      <div className="left">
        <Description5/>
      </div>
      <div className="right">
        <Source5/>
      </div>
    </div>
  );
}
