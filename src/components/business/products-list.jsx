"use client";

import { CircularLoader, ItemCard, ProductsLoader } from "atoms";
import { useGetLastElement, useProductsList } from "hooks";
import { useMemo } from "react";

const ProductsList = () => {
	const { data, hasMore, loading, pagesLoading, setPage } = useProductsList();

	const { lastElement } = useGetLastElement(pagesLoading, hasMore, () =>
		setPage((prev) => prev + 1)
	);

	const loaders = useMemo(() => {
		const loaders = [];
		for (let i = 0; i < 4; i++) {
			loaders.push(<ProductsLoader key={i} />);
		}
		return loaders;
	}, []);

	return (
		<div className=" overflow-auto" style={{ height: "52vh" }}>
			{loading
				? loaders
				: data?.results.map((item, index) => {
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
