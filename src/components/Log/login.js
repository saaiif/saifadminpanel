import React from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Sidebar from '../sidebar/sidebar';
import Form from '../form';
import classes from '../Log/login.module.css';

class Login extends React.Component {
	state = {
		sidebartoggler: false
	};

	drawerbutton = () => {
		this.setState((prevState) => {
			return { sidebartoggler: !prevState.sidebartoggler };
		});
	};

	render() {
		let sidebar;
		if (this.state.sidebartoggler) {
			sidebar = <Sidebar />;
		}
		return (
			<div className={classes.container}>
				<Navbar burgerbutton={this.drawerbutton} />
				{sidebar}
				<Form />
				<Footer />
			</div>
		);
	}
}

export default Login;
