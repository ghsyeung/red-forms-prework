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
              { k }: { error }
            </div>
          )
        }
      </div>
    )
    : null
  ;
}

function Input({value, placeholder, change}) {
  return (
    <input className="line"
      type="text" value={value || ''} placeholder={placeholder}
      onChange={change}/>
  );
}

function FancyInput({label, value, placeholder, change}) {
  return (
    <label className="line fancy">{label}
      <input type="text" value={value || ''} placeholder={placeholder}
        onChange={change}/>
    </label>
  );
}

function Field({name, change, form, render}) {
  const { config, state } = form;
  return render({
    label: config.label[name],
    value: state[name],
    placeholder: config.placeholder[name],
    change: (e) => change(name, e),
  });
}

const FormConfig = {
  label: { 
    name: 'Name',
    email: 'Email',
  },
  placeholder: {
    name: 'Name',
    email: 'test@test.com',
  }
};

export class Exercise4 extends Component {
  constructor() {
    super();
    this.state = {
      name: undefined,
      email: undefined,
      errors: {},
    };
  }

  validateName(name) {
    if (!name.trim()) {
      return `what's your name?`;
    }
  }

  validateEmail(email) {
    if (!/@.*\./i.test(email)) {
      return 'not a valid email';
    } else if (/gmail\.com/i.test(email)) {
      return 'cannot use gmail';
    }
  }

  validate(e) {
    const {name = "", email = ""} = this.state;
    const errors = {};

    const nameErrors = this.validateName(name); 
    if (nameErrors) {
      errors['name'] = nameErrors;
    }

    const emailErrors = this.validateEmail(email);
    if (emailErrors) {
      errors['email'] = emailErrors;
    }

    if (!(nameErrors || emailErrors)) {
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

    const form = { state: this.state, config: FormConfig };
    const change = this.change.bind(this);

    return (
      <div className="exercise-4">
        <h1>Demo 4</h1>
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

          <button className="line" type="submit">Submit</button>
          <Errors errors={errors}/>
        </form>
      </div>
    );
  }
}

