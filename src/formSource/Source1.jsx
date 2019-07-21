import React, {Component} from 'react';
import "../SimpleForm.css";

export class Source1 extends Component {
  constructor() {
    super();
    this.state = {
      name: undefined,
      email: undefined,
      errors:undefined,
    };
  }

  validate(e) {
    const {name = "", email = ""} = this.state;

    if (!name.trim()) {
      this.setState({errors: `what's your name?` });
    } else if (!/@.*\./i.test(email)) {
      this.setState({errors: 'not a valid email' });
    } else if (/gmail\.com/i.test(email)) {
      this.setState({errors: 'cannot use gmail' });
    } else {
      this.setState({errors: undefined});
      alert("Form is valid!");
    }

    e.preventDefault();
    return false;
  }

  change(field, e) {
    console.log(`Updating [${field}] = ${e.target.value}`);
    this.setState({[field]: e.target.value});
  }

  render() {
    const {name, email, errors} = this.state;

    return (
      <div className="exercise-1">
        <form onSubmit={(e) => this.validate(e)}>
          <h1>Demo 1</h1>
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

