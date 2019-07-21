import React, {Component} from 'react';
import "../SimpleForm.css";

export class Source2 extends Component {
  constructor() {
    super();
    this.state = {
      name: undefined,
      email: undefined,
      errors:undefined,
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

    const errors = this.validateName(name) || this.validateEmail(email);
    if (!errors) {
      alert("Form is valid!");
    } 

    // if there's no error, errors = undefined
    this.setState({errors});
    e.preventDefault();
    return false;
  }

  change(field, e) {
    this.setState({[field]: e.target.value});
  }

  render() {
    const {name, email, errors} = this.state;

    return (
      <div className="exercise-2">
        <h1>Demo 2</h1>
        <form onSubmit={(e) => this.validate(e)}>
          <input className="line" 
            type="text" value={name || ''} placeholder="Name" 
            onChange={(e) => this.change('name', e)}/>
          <input className="line"
            type="text" value={email || ''} placeholder="Email"
            onChange={(e) => this.change('email', e)}/>
          <button className="line" type="submit">Submit</button>
          { errors
              ? <div className="errors line">{errors}</div>
              : null
          }
        </form>
      </div>
    );
  }
}

