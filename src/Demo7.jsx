import React from 'react';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import "./SimpleForm.css";
import {Source7} from './formSource/Source7';

const desc = `
Turns out we have just created our own version 
of **react-final-form** 🙌!!

I've substitute our \`SuperForm\` and \`Field\` with
**react-final-form**'s \`Form\` and \`Field\`.

Now take some time to compare \`Source6\` and \`Source7\` and
see the difference.
`;

export function Description7() {
  return (
    <div className="description">
      <ReactMarkdown source={desc}/>

      <Link to="/e8">Demo 8</Link>
    </div>
  );
}

export function Demo7() {
  return (
    <div className="demo">
      <div className="left">
        <Description7/>
      </div>
      <div className="right">
        <div className="exercise-7">
          <h1>Demo 7</h1>
          <Source7/>
        </div>
      </div>
    </div>
  );
}
