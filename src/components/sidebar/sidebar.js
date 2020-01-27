import React from 'react';
import classes from './sidebar.module.css';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
	return (
		<div>
			<nav className={classes.sidedraw}>
				<ul className={classes.menuItems}>
					<li>
						<Link className={classes.active} to="/admin">
							<i class="fas fa-tachometer-alt" />Dashboard
						</Link>
					</li>
					<li>
						<Link to="/product">
							<i class="fas fa-shopping-cart" />Products
						</Link>
					</li>
					<li>
						<Link to="/account">
							<i class="far fa-user" />Account
						</Link>
					</li>
				</ul>
				<ul className={classes.logout}>
					<li>
						<Link to="/">
							Admin, <span style={{ fontWeight: 'bold' }}>Logout</span>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
