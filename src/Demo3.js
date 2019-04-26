import React from 'react';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import "./SimpleForm.css";
import {Source3} from './Source3';

const desc = `
Hm...so far so good?

What if we want to validate both fields at the same time?
Let's click *Submit* without filling out the form.

Notice that now there are 2 error entries.

Let's take a look at the code to see how it's done.

1. The view part is still very similar to before, except the new \`Errors\` component.
   - make sure you understand the code in \`Errors\` (\`filter\` and \`map\` from earlier this week)
2. \`validateName\` and \`validateEmail\` are still the same
3. \`validate\` is changed a bit, we are now making \`errors\` an object 

For example,
\`\`\`
{
  name: "what's your name?",
  email: "not a valid email"
}
\`\`\`

`;

export function Description3() {
  return (
    <div className="description">
      <ReactMarkdown source={desc}/>

      <Link to="/e4">Demo 4</Link>
    </div>
  );
}

export function Demo3() {
  return (
    <div className="demo">
    <div className="left">
      <Description3/>
    </div>
    <div className="right">
      <Source3/>
    </div>
    </div>
  );
}
