import { getCookie, setCookie } from "cookies-next";
import { CityType } from "interfaces";
import { useEffect, useState } from "react";
import { getCitiesList } from "services";

const useCitiesList = () => {
	const [loading, setLoading] = useState(true);

	const [data, setData] = useState<Array<CityType>>([]);

	const citiesList: any = [];
	let index = 0;
	while (getCookie(`cities_${index}`)) {
		citiesList.push(...JSON.parse(getCookie(`cities_${index}`) as string));
		index++;
	}
	useEffect(() => {
		if (citiesList?.length > 0) {
			setData(citiesList);
			setLoading(false);
		} else {
			setLoading(true);
			getCitiesList()
				.then((res) => {
					const allCities = res?.data;

					setData(allCities);

					const chunkSize = 40;
					const numberOfChunks = Math.ceil(
						allCities.length / chunkSize
					);

					for (let i = 0; i < numberOfChunks; i++) {
						const chunk = allCities.slice(
							i * chunkSize,
							(i + 1) * chunkSize
						);
						const expiryDate = new Date();
						expiryDate.setDate(expiryDate.getDate() + 1);
						setCookie(`cities_${i}`, JSON.stringify(chunk), {
							expires: expiryDate,
							secure: true,
							path: "/",
							sameSite: "lax",
						});
					}
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
