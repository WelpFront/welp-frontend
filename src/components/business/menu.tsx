import { ProductsList, CategoriesSlider } from "components";
import React from "react";

const Menu = ({ slug }: { slug: number }) => {
	return (
		<div className="bg-gray-100 max-h-400px px-3 py-3">
			<CategoriesSlider slug={slug} />
			<ProductsList />
		</div>
	);
};

export default Menu;
