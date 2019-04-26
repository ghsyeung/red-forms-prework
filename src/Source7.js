import React, {Component} from 'react';
import { Form, Field } from 'react-final-form';
import "./SimpleForm.css";

function Errors({errors}) {
  const nonEmptyEntries = Object.entries(errors)
    .filter(([fieldName, error]) => !!error);
  return nonEmptyEntries.length > 0
    ? (
      <div className="errors line">
        {
          nonEmptyEntries.map(([k, error]) => 
            <div key={k} className="error">
              { error }
            </div>
          )
        }
      </div>
    )
    : null
  ;
}

function Input({value, placeholder, onChange, meta}) {
  return (
    <div className="line">
      <input className="line"
        type="text" 
        value={value || ''} 
        placeholder={placeholder}
        onChange={onChange}/>
      { meta.touched && meta.error 
          ? (<Errors errors={[meta.error]}/>)
          : null
      }
    </div>
  );
}

function FancyInput({label, value, placeholder, onChange, meta}) {
  return (
    <label className="line fancy">{label}
      <input type="text" value={value || ''} placeholder={placeholder}
        onChange={onChange}/>
      { meta.touched && meta.error 
          ? (<Errors errors={[meta.error]}/>)
          : null
      }
    </label>
  );
}

function validateName(name) {
  if (!name || !name.trim()) {
    return `what's your name?`;
  }
}

function validateEmail(email) {
  if (!email || !/@.*\./i.test(email)) {
    return 'not a valid email';
  } else if (/gmail\.com/i.test(email)) {
    return 'cannot use gmail';
  }
}


export const FormConfig = {
  label: { 
    name: 'Name',
    email: 'Email',
  },
  placeholder: {
    name: 'Name',
    email: 'test@test.com',
  },
  validate: {
    name: validateName,
    email: validateEmail,
  }
};


export function FormView({handleSubmit}) {
  return (
    <form onSubmit={handleSubmit}>

      <Field name="name"
        render={({input, meta}) => (
          <Input 
            placeholder={FormConfig.placeholder[input.name]}
            onChange={input.onChange} 
            meta={meta}
            value={input.value} />
        )}/>

      <Field name="email"
        render={({input, meta}) => (
          <FancyInput 
            placeholder={FormConfig.placeholder[input.name]} 
            label={FormConfig.label[input.name]} 
            meta={meta}
            {...input} />
        )}/>

      <button className="line" type="submit">Submit</button>
    </form>
  );
}

function validate(state) {
  const errors = Object.entries(FormConfig.validate)
    .map(([k, validateFn]) => [k, validateFn(state[k])])
    .reduce((a, [k, e]) => { a[k] = e; return a; }, {})
  ;
  return errors;
}

export class Source7 extends Component {
  onSubmit(finalState) {
    alert(`Form is Valid!\n${JSON.stringify(finalState)}`);
  }

  render() {
    return (
      <div className="exercise-7">
        <Form
          onSubmit={this.onSubmit.bind(this)}
          validate={validate}
          render={props => (<FormView {...props}/>)}
        />
      </div>
    );
  }
}
