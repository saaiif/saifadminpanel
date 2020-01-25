import React, { Component } from 'react';
import classes from './form.module.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Form extends Component {
	constructor(props) {
		super(props);

		let token = localStorage.removeItem('token');
		let loggedin = false;

		this.state = {
			username: '',
			password: '',
			loggedin
		};

		this.onChange = this.onChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	onChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	

	submitForm(event) {
		event.preventDefault();
		let { username, password } = this.state;

		if (username && password) {
			localStorage.setItem('token', 'RandomString');
			this.setState({
				loggedin: true
			});
		}
	}

	render() {
		if (this.state.loggedin) {
			return <Redirect to="/admin" />;
		}
		return (
			<div className={classes.row}>
				<div className={classes.logContainer}>
					<div className={classes.loginform}>
						<h2>Welcome to Dashboard, Login</h2>

						<form onSubmit={this.submitForm}>
							<label>Username</label>
							<br />
							<input
								className={classes.formcontrol}
								type="text"
								maxLength="6"
								pattern="[a-zA-Z]{6}"
								name="username"
								value={this.state.username}
								onChange={this.onChange}
								required
							/>
							
							
							<br />
							<label>Password</label>
							<br />
							<input
								className={classes.formcontrol}
								type="password"
								name="password"
								maxLength="8"
								value={this.state.password}
								onChange={this.onChange}
								required
							/>
							
						
							<br />
							<button className={classes.loginbtn} onClick={this.state.password}>Login</button>
							<br />
							<button className={classes.tryAgain}>Forgot your password?</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Form;
