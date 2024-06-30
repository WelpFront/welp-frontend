"use client";

import { ProductsList, CategoriesSlider } from "components";
import { useCategoriesList, useGetLastElement, useProductsList } from "hooks";
import React from "react";

const Menu = ({ slug }: { slug: number }) => {
	const {
		active,
		data: categoriesData,
		loading: categoriesLoading,
		pathname,
		router,
		setActive,
		createQueryString,
	} = useCategoriesList(slug);

	const {
		data: productsData,
		hasMore,
		loading: productsLoading,
		pagesLoading,
		setPage,
	} = useProductsList(categoriesLoading);

	const { lastElement } = useGetLastElement(pagesLoading, hasMore, () =>
		setPage((prev) => prev + 1)
	);
	return (
		<div className="bg-gray-50 max-h-400px px-3 py-3">
			<CategoriesSlider
				setActive={setActive}
				data={categoriesData}
				loading={categoriesLoading}
				active={active}
				createQueryString={createQueryString}
				pathname={pathname}
				productsLoading={productsLoading}
				router={router}
			/>
			<ProductsList
				data={productsData}
				pagesLoading={pagesLoading}
				loading={productsLoading}
				lastElement={lastElement}
			/>
		</div>
	);
};

export default Menu;
