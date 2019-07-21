import React, {Component} from 'react';
import {Form, Field} from 'react-final-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import "../SimpleForm.css";

function Input({label, value, placeholder, onChange, meta}) {
  return (
    <div className="line">
      <div>
        <TextField
          variant="outlined"
          fullWidth={true}
          label={label}
          placeholder={placeholder}
          value={value}
          error={!!meta.touched && !!meta.error}
          helperText={!!meta.touched && meta.error || ""}
          onChange={onChange}
        />
      </div>
    </div>
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

function validateAge(age) {
  if (!age || !/^[0-9]+$/i.test(age)) {
    return 'not a valid age';
  }
}

export const FormConfig = {
  label: {
    name: 'Name',
    email: 'Email',
    age: 'Age',
  },
  placeholder: {
    name: 'Name',
    email: 'test@test.com',
    age: 'How old are you?',
  },
  validate: {
    name: validateName,
    email: validateEmail,
    age: validateAge,
  }
};

export function FormView({handleSubmit}) {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="name"
             render={({input, meta}) => (
               <Input
                 label={FormConfig.label[input.name]}
                 placeholder={FormConfig.placeholder[input.name]}
                 onChange={input.onChange}
                 meta={meta}
                 value={input.value}/>
             )}/>

      <Field name="email"
             render={({input, meta}) => (
               <Input
                 label={FormConfig.label[input.name]}
                 placeholder={FormConfig.placeholder[input.name]}
                 onChange={input.onChange}
                 meta={meta}
                 {...input} />
             )}/>

      <Field name="age"
             render={({input, meta}) => (
               <Input
                 placeholder={FormConfig.placeholder[input.name]}
                 label={FormConfig.label[input.name]}
                 meta={meta}
                 {...input} />
             )}/>

      <Button variant="contained"
              color="primary"
              type="submit">Submit</Button>
    </form>
  );
}

function validate(state) {
  const errors = Object.entries(FormConfig.validate)
    .map(([k, validateFn]) => [k, validateFn(state[k])])
    .reduce((a, [k, e]) => {
      a[k] = e;
      return a;
    }, {})
  ;
  return errors;
}

export class Source8 extends Component {
  onSubmit(finalState) {
    alert(`Form is Valid!\n${JSON.stringify(finalState)}`);
  }

  render() {
    return (
      <div className="exercise-8">
        <Form
          onSubmit={this.onSubmit.bind(this)}
          validate={validate}
          render={props => (<FormView {...props}/>)}
        />
      </div>
    );
  }
}
