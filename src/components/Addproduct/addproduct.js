import React, { Component } from 'react';
import './addproduct.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbars from '../Navbar/navbar2';
import Footer from '../Footer/footer';
import Sidebar from '../sidebar/sidebar';

class Addproduct extends Component {
	state = {
		sidebartoggler: false,
		addPdtImg: '',
		pic:
			'https://www.lifewire.com/thmb/yLFRNBmwLcKDRnkaZ0B0nXgLAQM=/960x640/filters:no_upscale():max_bytes(150000):strip_icc()/upload-2c485b5b6fef41f39a05afb9adfce03e.png'
	};

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.props.pdtnameField && this.props.descField && this.props.dateField && this.props.unitsField) {
			this.props.history.push('/product');
			console.log(this.props);
		}
	};

	onInputChange = (e, name) => {
		if (name === 'productname') {
			e.target.value.length > 0 ? this.props.onPdtNameFieldTrue() : this.props.onPdtNameFieldFalse();
			localStorage.setItem('productname', e.target.value);
		} else if (name === 'description') {
			e.target.value.length > 0 ? this.props.onDescFieldTrue() : this.props.onDescFieldFalse();
			localStorage.setItem('description', e.target.value);
		} else if (name === 'category') {
			e.target.value.length > 0 ? this.props.onCategoryFieldTrue() : this.props.onCategoryFieldFalse();
			localStorage.setItem('category', e.target.value);
		} else if (name === 'expirydate') {
			e.target.value.length > 0 ? this.props.onDateFieldTrue() : this.props.ondateFieldFalse();
			localStorage.setItem('expirydate', e.target.value);
		} else if (name === 'unitsinstocks') {
			e.target.value.length > 0 ? this.props.onUnitsFieldTrue() : this.props.onUnitsFieldFalse();
			localStorage.setItem('unitsinstocks', e.target.value);
		}
		var newProduct = {
			name: localStorage.getItem('productname'),
			stock: localStorage.getItem('unitsinstocks'),
			unitSold: localStorage.getItem('description'),
			expireDate: localStorage.getItem('expirydate')
		};

		console.log(JSON.stringify(newProduct));
		localStorage.setItem('NewProduct', JSON.stringify(newProduct));
	};

	onAddPdtBtnClick = () => {
		var pdtlist = JSON.parse(localStorage.getItem('Response')).productsPage.products;
		var list = JSON.parse(localStorage.getItem('NewProduct'));
		var newPdtList = pdtlist.push(JSON.parse(localStorage.getItem('NewProduct')));
		console.log(list);
		console.log(pdtlist);
		var object = JSON.parse(localStorage.getItem('Response'));
		object.productsPage.products = pdtlist;
		localStorage.setItem('Response', JSON.stringify(object));
		console.log(JSON.parse(localStorage.getItem('Response')));
	};

	drawerbuttons = () => {
		this.setState((prevState) => {
			return { sidebartoggler: !prevState.sidebartoggler };
		});
	};

	onPicUpload = (e) => {
		var img = this.state.addPdtImg;
		var object = JSON.parse(localStorage.getItem('Response'));
		console.log(e.target.files);
		if (e.target.files && e.target.files[0]) {
			let reader = new FileReader();
			reader.onload = (e) => {
				let imgSrc = e.target.result;
				this.setState({ pic: e.target.result });
				object.img = imgSrc;
				localStorage.setItem('Response', JSON.stringify(object));
				console.log(object);
			};
			reader.readAsDataURL(e.target.files[0]);
		}
	};

	render() {
		let sidebar;
		if (this.state.sidebartoggler) {
			sidebar = <Sidebar />;
		}
		return (
			<div className="add-page">
				<header>
					<Navbars burgerbutton={this.drawerbuttons} />
					{sidebar}
				</header>
				<div className="add-container">
					<div>
						<h2>Add Product</h2>
					</div>
					<div className="sections-con">
						<div className="detail-section">
							<form className="add-form" onSubmit={this.handleSubmit}>
								<div className="proName">
									<label for="name">Product Name</label>
									<input
										id="name"
										name="name"
										type="text"
										onInput={(e) => this.onInputChange(e, 'productname')}
										required
									/>
								</div>
								<div>
									<label for="description">Description</label>
									<textarea rows="8" onInput={(e) => this.onInputChange(e, 'description')} required />
								</div>
								<div>
									<label for="category">Category</label>
									<select
										id="category"
										className="select-cat"
										onInput={(e) => this.onInputChange(e, 'category')}
										required
									>
										<option value="0">Select Category</option>
										<option value="1">New Arrival</option>
										<option value="2">Most Popular</option>
										<option value="3">Trending</option>
									</select>
								</div>
								<div className="inputs-con">
									<div className="expiry_date">
										<label for="expiry_date">Expire Date</label>
										<input
											name="expiry_date"
											type="date"
											required
											onInput={(e) => this.onInputChange(e, 'expirydate')}
										/>
									</div>
									<div>
										<label for="stock">Units In Stock</label>
										<input
											id="stock"
											name="stock"
											type="number"
											onInput={(e) => this.onInputChange(e, 'unitsinstocks')}
											required
										/>
									</div>
								</div>
								<div>
									<button type="submit" className="add-pdt-btn" onClick={this.onAddPdtBtnClick}>
										ADD PRODUCT NOW
									</button>
								</div>
							</form>
						</div>
						<div className="img-section">
							<img className="upload-img" src={this.state.pic} />
							<div>
								<input
									id="fileInput"
									type="file"
									accept="image/*"
									className="pdt-choose-file"
									onChange={(e) => this.onPicUpload(e)}
								/>
								<input type="button" className="upload-btn" value="UPLOAD PRODUCT IMAGE" />
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

const mapGlobalStateToProps = (globalState) => {
	return {
		pdtnameField: globalState.pdtnameField,
		descField: globalState.descField,
		categoryField: globalState.categoryField,
		dateField: globalState.dateField,
		unitsField: globalState.unitsField
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onPdtNameFieldTrue: () => {
			dispatch({ type: 'PDTNAME_YES' });
		},
		onPdtNameFieldFalse: () => {
			dispatch({ type: 'PDTNAME_NO' });
		},
		onDescFieldTrue: () => {
			dispatch({ type: 'DESCRIPTION_YES' });
		},
		onDescFieldFalse: () => {
			dispatch({ type: 'DESCRIPTION_NO' });
		},
		onCategoryFieldTrue: () => {
			dispatch({ type: 'CATEGORY_YES' });
		},
		onCategoryFieldFalse: () => {
			dispatch({ type: 'CATEGORY_NO' });
		},
		onDateFieldTrue: () => {
			dispatch({ type: 'DATE_YES' });
		},
		ondateFieldFalse: () => {
			dispatch({ type: 'DATE_NO' });
		},
		onUnitsFieldTrue: () => {
			dispatch({ type: 'UNITS_YES' });
		},
		onUnitsFieldFalse: () => {
			dispatch({ type: 'UNITS_NO' });
		}
	};
};

export default connect(mapGlobalStateToProps, mapDispatchToProps)(Addproduct);
