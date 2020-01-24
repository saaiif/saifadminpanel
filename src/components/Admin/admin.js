import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import classes from './admin.module.css';\
import './admin.css';
import Navbars from '../Navbar/navbar2';
import Sidebar from '../sidebar/sidebar';
import Latesthits from '../Admin/charts';
import Perfomance from '../Admin/chartlines';
import ChartPie from '../Admin/chartpie';
import Notification from '../Admin/Notification/notification';
import Order from '../Admin/Order/order';
import Footer from '../Footer/footer';

class Admin extends Component {
	constructor(props) {
		super(props);
		let token = localStorage.getItem('token');

		let loggedin = true;
		if (token == null) {
			loggedin = false;
		}

		this.state = {
			loggedin
		};
	}

	state = {
		sidebartoggler: false
	};

	drawerbuttons = () => {
		this.setState((prevState) => {
			return { sidebartoggler: !prevState.sidebartoggler };
		});
	};

	render() {
		if (this.state.loggedin === false) {
			return <Redirect to="/" />;
		}

		let sidebar;
		if (this.state.sidebartoggler) {
			sidebar = <Sidebar />;
		}

		// return (
		// 	<div>
		// 		<header>
		// 			<Navbars burgerbutton={this.drawerbuttons} />
		// 			{sidebar}
		// 		</header>

		// 	</div>
		// );

		return (
			<div className="dash-container">
				<Navbars burgerbutton={this.drawerbuttons} />
				{sidebar}
				<div className="dash-row">
					<p className="dash-title">
						Welcome back, <b>Admin</b>
					</p>
				</div>
				<div className="dash-content">
					<div className="latest-and-per-boxes">
						<div className="con">
							<div className="con-block">
								<h2 className="con-title">Latest Hits</h2>
								<Latesthits />
							</div>
						</div>
						<div className="con">
							<div className="con-block">
								<h2 className="con-title">Perfomance</h2>
								<Perfomance />
							</div>
						</div>
					</div>
					<div className="storage-and-noti-boxes">
						<div className="storage-con">
							<div className="con-block">
								<h2 className="con-title">Storage Information</h2>
								<ChartPie />
							</div>
						</div>
						{/* {console.log(props)} */}
						<div className="noti-con">
							<div className="con-block">
								<h2 className="con-title">Notification List</h2>
								<Notification />
							</div>
						</div>
					</div>
					<div className="order-list">
                        <div>
                        <h2 className="ol-title">Orders List</h2>
                        <Order/>
                        </div>
                    </div>
				</div>
				<div className="extra-space"></div>
				<Footer />
			</div>
		);
	}
}

export default Admin;
