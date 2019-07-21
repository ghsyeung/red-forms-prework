import React from 'react';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import "./SimpleForm.css";
import {Source5} from './formSource/Source5';

const desc = `
Exercise 4 was fun, we now have a \`Field\` component that 
handles all the boring logic (i.e. crazy man grabbing form state 
to feed the rendering component). But we aren't done yet.

Let's take it breather and make a slight improvement here. Rather than
showing errors in a single block, let's feed it to each 
\`Field\` so each rendering component can show their own error.

We first need to pass the errors along,

\`\`\`jsx
const {errors, ...fieldData} = this.state;

const onChange = this.onChange.bind(this);
const form = {
  state: fieldData,
  config: FormConfig, 
  errors,
  onChange,
};
\`\`\`

We then modify \`Field\` slightly to pass along the errors

\`\`\`jsx
function Field({name, form, render}) {
  const { config, state, errors, onChange } = form;
  return render({
    label: config.label[name],
    value: state[name],

    // CHANGE!!
    meta: { error: errors[name] },
    
    placeholder: config.placeholder[name],
    onChange: (e) => onChange(name, e),
  });
}
\`\`\`


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
