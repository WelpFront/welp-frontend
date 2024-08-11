import { CategoryType } from "interfaces";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCategory } from "services";
import { useBusinessesFilterStore } from "store/businesses-filters";

const useGetCategory = (id: string) => {
	const [loading, setLoading] = useState(true);

	const [data, setData] = useState<Array<CategoryType>>([]);

	const router = useRouter();

	const setCategory = useBusinessesFilterStore((state) => state.setCategory);

	const setCategories = useBusinessesFilterStore(
		(state) => state.setChildrenCategories
	);

	useEffect(() => {
		if (id) {
			setLoading(true);
			getCategory(id)
				.then((res) => {
					setData(res);

					setCategory(res);

					setCategories(res?.children);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [router]);

	return {
		data,
		loading,
		router,
	};
};

export default useGetCategory;
