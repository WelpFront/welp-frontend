import CategoriesSlider from "./categories-slider";
import { ItemCard } from "atoms";
import React from "react";

const Menu = () => {
	return (
		<div className="bg-gray-100 min-h-screen px-3 py-3">
			<CategoriesSlider />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
		</div>
	);
};

export default Menu;
