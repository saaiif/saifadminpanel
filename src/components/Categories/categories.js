import React from 'react';
import './categories.css';

const Categories = (props) => {
	return (
		<div>
			{props.propsToPass.categoriesPageData.map((item, pos) => {
				return (
					<tbody className="category sep-line" key={pos}>
						<tr>
							<td>{item}</td>
							<td>
								<a>
									<i
										id={pos}
										className="far fa-trash-alt tm-product-delete-icon"
										onClick={(e) =>
											props.propsToPass.onDeleteSingleRow('categoryList', e.target.id)}
									/>
								</a>
							</td>
						</tr>
					</tbody>
				);
			})}
		</div>
	);
};

export default Categories;
