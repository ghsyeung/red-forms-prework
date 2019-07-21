import React from 'react';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import "./SimpleForm.css";
import {SuperForm, FormView, FormConfig} from './formSource/Source6';

const desc = `
Take a look at \`Source5\` again, it looks like component 
is growing bigger. Maybe we can refactor (split) \`Source5\` 
into 2 different parts.

1. component that contains all the change/submit/validation logic
   - Let's call this \`SuperForm\`
2. component that renders the form 
   - we'll call this \`FormView\`

This functionality should not change, we are simply moving code around.

When we are done, we'll see the \`Source5\` component has been split
into 2 parts.

\`\`\`jsx
      <div className="right">
        <div className="exercise-6">
          <h1>Demo 6</h1>

          <!-- HERE!! -->
          <SuperForm
            formConfig={FormConfig} 
            render={
              props => (<FormView {...props}/>)
            }/>
        </div>
      </div>
\`\`\`

Let's take a quick look at \`FormView\`, it only contains the 
structure of our form! Looks pretty clean eh? 🇨🇦

\`\`\`jsx
export function FormView({form, handleSubmit}) {
  return (
    <form onSubmit={handleSubmit}>

      <Field name="name"
        form={form}
        render={props => (
          <Input {...props}/>
        )}/>

      <Field name="email"
        form={form}
        render={props => (
          <FancyInput label="Email" {...props}/>
        )}/>

      <Field name="age"
        form={form}
        render={props => (
          <FancyInput label="Age" {...props}/>
        )}/>

      <button className="line" type="submit">Submit</button>
    </form>
  );
}
\`\`\`

`;

export function Description6() {
  return (
    <div className="description">
      <ReactMarkdown source={desc}/>

      <Link to="/e7">Demo 7</Link>
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

          <SuperForm
            formConfig={FormConfig} 
            render={
              props => (<FormView {...props}/>)
            }/>
        </div>
      </div>
    </div>
  );
}
