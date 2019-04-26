import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import "./SimpleForm.css";
import {Source4} from './Source4';

const desc = `
We made some progress, now we can show errors for multiple fields!

But what happens if we have an app that requires like...15 forms??

Let's think about what are the common logic for forms?


`;

export function Description4() {
  return (
    <div className="description">
      <ReactMarkdown source={desc}/>

      <Link to="/e5">Demo 5</Link>
    </div>
  );
}

export function Demo4() {
  return (
    <div className="demo">
      <div className="left">
        <Description4/>
      </div>
      <div className="right">
        <Source4/>
      </div>
    </div>
  );
}
