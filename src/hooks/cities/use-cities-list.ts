import { CityType } from "interfaces";
import { useEffect, useState } from "react";
import { getCitiesList } from "services";
import { useCitiesStore } from "store/cities";

const useCitiesList = () => {
	const [loading, setLoading] = useState(true);

	const [data, setData] = useState<Array<CityType>>([]);

	const { cities: citiesList, setCities } = useCitiesStore((state) => state);

	useEffect(() => {
		if (citiesList?.length > 0) {
			setData(citiesList);
			setLoading(false);
		} else {
			setLoading(true);
			getCitiesList()
				.then((res) => {
					setData(res?.data);

					setCities(res?.data);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, []);

	return {
		data,
		loading,
	};
};

export default useCitiesList;
