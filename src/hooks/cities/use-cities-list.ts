import { getCookie, setCookie } from "cookies-next";
import { CityType } from "interfaces";
import { useEffect, useState } from "react";
import { getCitiesList } from "services";

const useCitiesList = () => {
	const [loading, setLoading] = useState(true);

	const [data, setData] = useState<Array<CityType>>([]);

	const citiesList = getCookie("cities");

	useEffect(() => {
		if (citiesList) {
			setData(JSON.parse(citiesList));
		} else {
			setLoading(true);
			getCitiesList()
				.then((res) => {
					setData(res?.data);
					const expiryDate = new Date();
					expiryDate.setDate(expiryDate.getDate() + 1);
					setCookie("cities", res?.data, { expires: expiryDate });
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
