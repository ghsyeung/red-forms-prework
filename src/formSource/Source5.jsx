import React, {Component} from 'react';
import "../SimpleForm.css";

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

/* CHANGE!!
   - added `meta` field, see Field for explanation
 */
function Input({value, placeholder, onChange, meta}) {
  return (
    <div className="line">
      <input className="line"
        type="text" 
        value={value || ''} 
        placeholder={placeholder}
        onChange={onChange}/>
      { meta.error 
          ? (<Errors errors={[meta.error]}/>)
          : null
      }
    </div>
  );
}

/* CHANGE!!
   - added `meta` field, see Field for explanation
 */
function FancyInput({label, value, placeholder, onChange, meta}) {
  return (
    <label className="line fancy">{label}
      <input type="text" value={value || ''} placeholder={placeholder}
        onChange={onChange}/>
      { meta.error 
          ? (<Errors errors={[meta.error]}/>)
          : null
      }

    </label>
  );
}

function Field({name, form, render}) {
  const { config, state, errors, onChange } = form;
  return render({
    label: config.label[name],
    value: state[name],

    /* CHANGE!!
       So instead of showing all errors at the bottom of the form,
       we are passing the errors into each Field through the
       `meta` field
     */
    meta: { error: errors[name] },
    placeholder: config.placeholder[name],
    onChange: (e) => onChange(name, e),
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

/* CHANGE!!
   - added another field `age`
 */
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

  onChange(field, e) {
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
    const {errors, ...fieldData} = this.state;

    const onChange = this.onChange.bind(this);
    const form = {
      state: fieldData,
      config: FormConfig, 
      errors,
      onChange,
    };

    return (
      <div className="exercise-5">
        <h1>Demo 5</h1>
        <form onSubmit={(e) => this.validate(e)}>

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
      </div>
    );
  }
}

