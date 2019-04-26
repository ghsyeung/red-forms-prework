import React, {Component} from 'react';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import "./SimpleForm.css";

function Input({label, value, placeholder, onChange, meta}) {
	return (
		<div className="line">
		<div>
			<InputLabel shrink>{label}</InputLabel>
			<TextField 
				placeholder={placeholder}
				value={value}
				error={meta.touched && meta.error}
				onChange={onChange}
			/>
			{ meta.touched && meta.error
					? (<FormHelperText id="component-error-text">{meta.error}</FormHelperText>)
					:null
			}
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
						label={FormConfig.label[input.name]} 
						placeholder={FormConfig.placeholder[input.name]}
						onChange={input.onChange} 
						meta={meta}
						value={input.value} />
				)}/>

			<Field name="email"
				render={({input, meta}) => (
					<Input
						label={FormConfig.label[input.name]} 
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
