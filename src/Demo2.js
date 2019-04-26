import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import "./SimpleForm.css";
import {Source2} from './Source2';

const desc = `
Let's try filling in the form, does it work the same way as before? 

Let's compare \`Source1\` and \`Source2\`. What has changed?

Hint: the *validate* method
`;

export function Description2() {
  return (
    <div className="description">
      <ReactMarkdown source={desc}/>

      <Link to="/e3">Demo 3</Link>
    </div>
  );
}

export function Demo2() {
  return (
    <div className="demo">
    <div className="left">
      <Description2/>
    </div>
    <div className="right">
      <Source2/>
    </div>
    </div>
  );
}
