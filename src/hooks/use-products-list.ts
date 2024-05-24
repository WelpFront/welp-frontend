import { useParams, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { getBusinessProducts } from "services";

const useProductsList = () => {
	const initialState = {
		results: [],
		next: null,
		previous: null,
		count: 0,
	};

	const { slug } = useParams();

	const [data, setData] = useState(initialState);

	const [loading, setLoading] = useState(false);

	const [pagesLoading, setPagesLoading] = useState(false);

	const [hasMore, setHasMore] = useState(false);

	const [page, setPage] = useState(1);

	const searchParams = useSearchParams();

	const type = searchParams.get("type");

	const fetchProductsHandler = useCallback(
		(pg: number) => {
			getBusinessProducts(slug, type, pg)
				.then((res) => {
					setData((prev: any) => ({
						...prev,
						results:
							pg === 1
								? res?.results
								: [...prev?.results, ...res?.results],
						count: res?.count,
						next: res?.next,
						previous: res?.previous,
					}));
					if (res.next) setHasMore(true);
					else setHasMore(false);
				})
				.catch((error) => {
					console.log(error);
				})
				.finally(() => {
					setLoading(false);
					setPagesLoading(false);
				});
		},
		[slug, type]
	);

	useEffect(() => {
		if (data.results.length === 0) {
			setLoading(true);
		} else {
			setPagesLoading(true);
		}
		if (slug && type && page !== 1) {
			fetchProductsHandler(page);
		}
	}, [page]);

	useEffect(() => {
		setData(initialState);

		setLoading(true);

		setPage(1);

		if (slug && type) {
			fetchProductsHandler(1);
		}
	}, [type, slug]);

	return {
		data,
		loading,
		pagesLoading,
		hasMore,
		setPage,
		setPagesLoading,
	};
};

export default useProductsList;
