import React from 'react';
import classes from './navbar.module.css';
import { Link, BrowserRouter, NavLink } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import Navbar from './navbar';
import ProductList from '../Product/product';

const Navbars = (props) => {
	return (
		<div>
			<header>
				<nav className={classes.navbar}>
					<div className={classes.logo}>
						<Link to="/admin">
							<h3>product admin</h3>
						</Link>
					</div>

					<ul className={classes.menuItems}>
						<li>
							<NavLink className={classes.mainDiv} activeClassName="main-nav-active" exact to="/admin">
								<i class="fas fa-tachometer-alt" />Dashboard
							</NavLink>
						</li>
						<li>
							<NavLink className={classes.mainDiv} activeClassName="main-nav-active" exact to="/product">
								<i class="fas fa-shopping-cart" />Products
							</NavLink>
						</li>
						<li>
							<NavLink className={classes.mainDiv} activeClassName="main-nav-active" exact to="/account">
								<i class="far fa-user" />Account
							</NavLink>
						</li>
					</ul>
					<ul className={classes.logout}>
						<li>
							<Link to="/">
								Admin, <b>Logout</b>
							</Link>
						</li>
					</ul>
					<div className={classes.iconbars} onClick={props.burgerbutton}>
						<i class="fas fa-bars" />
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Navbars;
