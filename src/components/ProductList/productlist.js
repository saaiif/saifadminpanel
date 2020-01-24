import React from 'react';
import './productlist.css';

const list = (props) =>
	props.productListData.map((item, pos) => {
		return (
			<tr key={pos} className="sep-line">
				<th scope="row">
					<input
						id={pos}
						type="checkbox"
						checked={item.selected}
						className="checkbox"
						onClick={(event) => props.onClickingCheckbox(event.target.id)}
					/>
				</th>
				<td scope="row">{item.name}</td>
				<td scope="row">{item.unitSold}</td>
				<td scope="row">{item.stock}</td>
				<td scope="row">{item.expireDate}</td>
				<td>
					<a>
						<i
							id={pos}
							className="far fa-trash-alt tm-product-delete-icon"
							onClick={(e) => props.onDeleteSingleRow('productList', e.target.id)}
						/>
					</a>
				</td>
			</tr>
		);
	});

const ProductList = (props) => {
	return (
		<div className="pdtlist">
			<table className="l-table">
				<thead>
					<tr>
						<th scope="col">&nbsp;</th>
						<th scope="col">PRODUCT NAME</th>
						<th scope="col">UNIT SOLD</th>
						<th scope="col">IN STOCK</th>
						<th scope="col">EXPIRY DATE</th>
						<th scope="col">&nbsp;</th>
					</tr>
				</thead>
				<tbody>{list(props.propsToPass)}</tbody>
			</table>
		</div>
	);
};

export default ProductList;
