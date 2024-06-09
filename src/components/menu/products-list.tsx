"use client";

import { CircularLoader, ItemCard, ProductsLoader } from "atoms";
import { ProductType } from "interfaces";
import { useMemo } from "react";

const ProductsList = ({
	data,
	loading,
	pagesLoading,
	lastElement,
}: {
	data: any;
	loading: boolean;
	pagesLoading: boolean;
	lastElement: any;
}) => {
	const loaders = useMemo(() => {
		const loaders = [];
		for (let i = 0; i < 4; i++) {
			loaders.push(<ProductsLoader key={i} />);
		}
		return loaders;
	}, []);

	return (
		<div className=" overflow-auto h-screen">
			{loading
				? loaders
				: data?.results.map((item: ProductType, index: number) => {
						return (
							<div
								ref={
									data?.results?.length === index + 1
										? lastElement
										: null
								}
								key={item.id}>
								<ItemCard item={item} />
							</div>
						);
				  })}
			{pagesLoading && (
				<div className="w-full flex items-center justify-center">
					<CircularLoader />
				</div>
			)}

			{!loading && data?.results.length === 0 && (
				<div className="text-secondary h-44 flex items-end justify-center">
					لا يوجد منتجات
				</div>
			)}
		</div>
	);
};

export default ProductsList;
