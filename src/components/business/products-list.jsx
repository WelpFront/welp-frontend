"use client";

import { ItemCard, ProductsLoader } from "atoms";
import { useSearchParams, useParams } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import { getBusinessProducts } from "services";

const ProductsList = () => {
	const [data, setData] = useState({});

	const [loading, setLoading] = useState(true);

	const { slug } = useParams();

	const searchParams = useSearchParams();

	const type = searchParams.get("type");

	const loaders = useMemo(() => {
		const loaders = [];
		for (let i = 0; i < 4; i++) {
			loaders.push(<ProductsLoader key={i} />); // Add ProductsLoader component to the array
		}
		return loaders;
	}, []);

	useEffect(() => {
		setLoading(true);
		getBusinessProducts(slug, type)
			.then((res) => {
				setData(res);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [type]);

	return (
		<>
			{loading
				? loaders
				: data?.results.map((item) => (
						<ItemCard key={item.id} item={item} />
				  ))}

			{!loading && data?.results.length === 0 && (
				<div className="text-secondary h-44 flex items-end justify-center">
					لا يوجد منتجات
				</div>
			)}
		</>
	);
};

export default ProductsList;
