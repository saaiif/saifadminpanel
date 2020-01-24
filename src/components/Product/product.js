import React, { Component } from 'react';
import './product.css';
import { Link } from 'react-router-dom';
import Categories from '../Categories/categories';
import ProductList from '../ProductList/productlist';
import Sidebar from '../sidebar/sidebar';
import popup from '../PopUp/popup';
import { connect } from 'react-redux';
import Navbars from '../Navbar/navbar2';
import Footer from '../Footer/footer';

class Product extends Component {
	state = {
		pageData: JSON.parse(localStorage.getItem('Response')).productsPage,
		sidebartoggler: false
	};

	drawerbuttons = () => {
		this.setState((prevState) => {
			return { sidebartoggler: !prevState.sidebartoggler };
		});
	};
	//-----------CHANGE---------------
	//PASSED THROUGH PROPS
	onChkBoxClick = (selectedProductId) => {
		console.log(this.state.pageData.products);
		let array = this.state.pageData.products;
		array[selectedProductId].selected = !array[selectedProductId].selected;
		let object = this.state.pageData;
		object.products = array;
		this.setState({
			pageData: object
		});
	};
	//------------------CHANGE----
	//MADE A COMMON DELETE SINGLE ROW FUNCTION AND PASSED THROUGH PROPS
	onDeleteIconClick = (listName, id) => {
		let tempObject = JSON.parse(localStorage.getItem('Response'));
		let array;
		if (listName === 'productList') {
			array = this.state.pageData.products;
			array.splice(id, 1);
			tempObject.productsPage.products = array;
		} else if (listName === 'categoryList') {
			array = this.state.pageData.categories;
			array.splice(id, 1);
			tempObject.productsPage.categories = array;
		}

		localStorage.setItem('Response', JSON.stringify(tempObject));

		this.setState({
			pageData: tempObject.productsPage
		});
	};
	//---------CHANGE-----------------
	//DELETE SELECTED ROWS PASSED THROUGH PROPS
	onDeleteSelectedBtnClick = () => {
		let object = JSON.parse(localStorage.getItem('Response'));
		let list = this.state.pageData.products;
		list = list.filter((li) => !li.selected);
		object.productsPage.products = list;
		localStorage.setItem('Response', JSON.stringify(object));
		this.setState({
			pageData: object.productsPage
		});
	};

	render() {
		let sidebar;
		if (this.state.sidebartoggler) {
			sidebar = <Sidebar />;
		}
		return (
			<div className="product-page">
				<header>
					<Navbars burgerbutton={this.drawerbuttons} />
					{sidebar}
				</header>
				{/* <div className="extra-space">hi</div> */}
				<div className="pro-container">
					<div className="pl-con">
						<div className="pl">
							{/*---------------CHANGE-------------------*/}
							<ProductList
								propsToPass={{
									productListData: this.state.pageData.products,
									onClickingCheckbox: this.onChkBoxClick,
									onDeleteSingleRow: this.onDeleteIconClick
								}}
							/>
						</div>
						<Link to={'/addproduct'}>
							<button className="add-btn">ADD NEW PRODUCT</button>
						</Link>
						<button className="de-se-btn" onClick={(e) => this.onDeleteSelectedBtnClick(e)}>
							DELETE SELECTED PRODUCTS
						</button>
					</div>
					<div className="pc-con">
						<div className="pc">
							<h2>Product categories</h2>
							<div className="right-tc">
								<table className="r-table">
									{/*---------------CHANGE-------------------*/}
									<Categories
										propsToPass={{
											categoriesPageData: this.state.pageData.categories,
											onDeleteSingleRow: this.onDeleteIconClick
										}}
									/>
								</table>
							</div>
							<Link to={'/product/popup'}>
								<button className="category-btn" onClick={this.props.onShowPopup}>
									ADD NEW CATEGORY
								</button>
							</Link>
							{/* {this.props.showPopup?<Popup/>:null} */}
						</div>
					</div>
				</div>
				{/* <div className="extra-space"></div> */}
				<Footer />
			</div>
		);
	}
}

const mapGlobalStateToProps = (globalState) => {
	return {
		showPopup: globalState.showPopup
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onShowPopup: () => {
			dispatch({ type: 'SHOW_POPUP' });
		}
	};
};

export default connect(mapGlobalStateToProps, mapDispatchToProps)(Product);
