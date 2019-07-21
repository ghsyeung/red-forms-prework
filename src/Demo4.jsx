import React from 'react';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import "./SimpleForm.css";
import {Source4} from './formSource/Source4';

const desc = `
We made some progress in \`Source3\`, 
and now we can show errors for multiple fields!

However, inside \`Source3.render()\`, you'll notice we need
to extract each field from the form state.

What happens if we have an app that requires like...15 forms??
That's a lot of repeating lines...can we common out some logic?

Sure we can! 

There are many common things an \`input\` needs.

- current value of the input
- label of the input
- placeholder of the input
- onChange for the input

\`\`\`jsx
const { name } = this.state;

  <input className="line" 
    type="text" 
    value={name || ''} 
    placeholder="Name" 
    onChange={(e) => this.change('name', e)}/>
\`\`\`

Let's create a React Component called \`Field\` 
to handle the boring parts! (see \`Source4\`).

Suppose the \`Field\` component can handle the common
parts listed above, then we can rewrite the above with 

\`\`\`jsx
  <Field name="name"
    form={form}
    render={props => (
    <Input {...props}/>
  )}/>
\`\`\`

\\*\\*mind-blown\\*\\* 😱

It's actually not that magical! The little trick is
to stuff everything inside the \'form\' argument. Take
a good look at what we destructure from \`form\`.

\`\`\`jsx

function Field({name, form, render}) {
  // state: current form state
  // config: form config (label, placeholder)
  // onChange: onChange(fieldName, event)
  const { config, state, onChange } = form;
  
  return render({
    label: config.label[name],
    value: state[name],
    placeholder: config.placeholder[name],
    onChange: (e) => onChange(name, e),
  });
}

\`\`\`
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
