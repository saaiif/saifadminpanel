import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Login from './components/Log/login';
import Popup from './components/PopUp/popup';
import Logout from './components/Log/logout';
import Admin from './components/Admin/admin';
import Footer from './components/Footer/footer';
import Form from './components/form';
import Product from './components/Product/product';
import Account from './components/Account/account';
import Addproduct from './components/Addproduct/addproduct';
import ProductList from './components/Product/product';
import Navbar from './components/Navbar/navbar';

class App extends Component {
	componentDidMount() {
		axios
			.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
			.then((response) => {
				response.data.productsPage.products.map((item) => (item.selected = false));
				localStorage.setItem('Response', JSON.stringify(response.data));
				this.props.onUserLoggedIn();
			})
			.catch((err) => {
				// console.log(err + ' =>please refresh the page');
			});
	}
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Switch>
						<Route exact path="/" component={Login} />
						<Route path="/admin" component={Admin} />
						<Route path="/product/popup" component={Popup} />
						<Route path="/addproduct" component={Addproduct} />
						<Route path="/product" component={Product} />
						<Route path="/account" component={Account} />
					</Switch>
					{/* <Footer/> */}
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
