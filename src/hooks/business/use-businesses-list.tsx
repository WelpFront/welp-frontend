import { BusinessType } from "interfaces";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getBusinessesList } from "services";
import { useBusinessesFilterStore } from "store/businesses-filters";

const useBusinessesList = () => {
	const [businesses, setBusinesses] = useState<Array<BusinessType>>([]);

	const [page, setPage] = useState<number>(1);

	const [loading, setLoading] = useState<boolean>(true);

	const [count, setCount] = useState<number>(0);

	const isOpened = useBusinessesFilterStore((state) => state.isOpened);

	const searchParams = useSearchParams();

	const category = searchParams.get("category");

	const priceCategory = useBusinessesFilterStore(
		(state) => state.priceCategory
	);

	const isDeliveryAvailable = useBusinessesFilterStore(
		(state) => state.isDeliveryAvailable
	);

	const categoriesToFilterWith = useBusinessesFilterStore(
		(state) => state.categoriesToFilterWith
	);

	const setIsLoading = useBusinessesFilterStore(
		(state) => state.setIsLoading
	);

	const filteredCategories =
		categoriesToFilterWith?.length > 0
			? categoriesToFilterWith
			: [parseInt(category as string)];

	const fetchBusinessesHandler = async () => {
		setLoading(true);
		setIsLoading(true);
		try {
			const data = await getBusinessesList(
				page,
				filteredCategories,
				isOpened,
				priceCategory,
				isDeliveryAvailable
			);

			setBusinesses(data.results);

			setCount(data.count);
		} catch (error: any) {
			toast.error(error);
		} finally {
			setLoading(false);

			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchBusinessesHandler();
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [page]);

	useEffect(() => {
		setPage(1);
	}, [isOpened, priceCategory, isDeliveryAvailable, categoriesToFilterWith]);

	useEffect(() => {
		if (page === 1) {
			fetchBusinessesHandler();
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [isOpened, priceCategory, isDeliveryAvailable, categoriesToFilterWith]);

	return {
		setPage,
		businesses,
		count,
		loading,
		page,
	};
};

export default useBusinessesList;
