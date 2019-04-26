import React, {Component} from 'react';
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

function Input({value, placeholder, change, meta}) {
  return (
    <div className="line">
      <input className="line"
        type="text" 
        value={value || ''} 
        placeholder={placeholder}
        onChange={change}/>
      { meta.error 
          ? (<Errors errors={[meta.error]}/>)
          : null
      }
    </div>
  );
}

function FancyInput({label, value, placeholder, change, meta}) {
  return (
    <label className="line fancy">{label}
      <input type="text" value={value || ''} placeholder={placeholder}
        onChange={change}/>
      { meta.error 
          ? (<Errors errors={[meta.error]}/>)
          : null
      }

    </label>
  );
}

function Field({name, change, form, render}) {
  const { config, state, errors } = form;
  return render({
    label: config.label[name],
    value: state[name],
    meta: { error: errors[name] },
    placeholder: config.placeholder[name],
    change: (e) => change(name, e),
  });
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



const FormConfig = {
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

export class Source5 extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
    };
  }

  validate(e) {
    const state = this.state;

    const errors = Object.entries(FormConfig.validate)
      .map(([k, validateFn]) => [k, validateFn(state[k])])
      .reduce((a, [k, e]) => { a[k] = e; return a; }, {})
    ;

    if (Object.entries(errors).every(([k, e]) => !e)) {
      alert("Form is valid!");
    } 

    this.setState({errors});
    // if there's no error, errors = {}
    e.preventDefault();
    return false;
  }

  change(field, e) {
    const {errors} = this.state;

    this.setState({
      [field]: e.target.value,
      errors: {
        ...errors,
        [field]: undefined
      }
    });
  }

  render() {
    const {errors} = this.state;

    const form = { 
      state: this.state, 
      config: FormConfig, 
      errors 
    };

    const change = this.change.bind(this);

    return (
      <div className="exercise-5">
        <h1>Demo 5</h1>
        <form onSubmit={(e) => this.validate(e)}>

          <Field name="name"
            form={form}
            change={change}
            render={props => (
              <Input {...props}/>
            )}/>

          <Field name="email"
            form={form}
            change={change}
            render={props => (
              <FancyInput label="Email" {...props}/>
            )}/>


          <Field name="age"
            form={form}
            change={change}
            render={props => (
              <FancyInput label="Age" {...props}/>
            )}/>

          <button className="line" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

