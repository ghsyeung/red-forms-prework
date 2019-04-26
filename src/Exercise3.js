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

export class Exercise3 extends Component {
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
    const {name, email, errors} = this.state;

    return (
      <div className="exercise-3">
        <h1>Demo 3</h1>
        <form onSubmit={(e) => this.validate(e)}>
          <input className="line" 
            type="text" value={name || ''} placeholder="Name" 
            onChange={(e) => this.change('name', e)}/>
          <input className="line"
            type="text" value={email || ''} placeholder="Email"
            onChange={(e) => this.change('email', e)}/>
          <button className="line" type="submit">Submit</button>
          <Errors errors={errors}/>
        </form>
      </div>
    );
  }
}

