import { getCookie, setCookie } from "cookies-next";
import { CityType } from "interfaces";
import { useEffect, useState } from "react";
import { getCitiesList } from "services";

const useCitiesList = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState<Array<CityType>>([]);

	const citiesList: any = [];
	let index = 0;
	let cookie;
	while ((cookie = getCookie(`cities_${index}`))) {
		citiesList.push(...JSON.parse(cookie));
		index++;
	}

	useEffect(() => {
		if (citiesList.length > 0) {
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
						const chunkStr = JSON.stringify(chunk);
						const expiryDate = new Date();
						expiryDate.setDate(expiryDate.getDate() + 1);

						if (chunkStr.length > 4000) {
							console.error(
								`Chunk size exceeds cookie limit: ${chunkStr.length} bytes`
							);
							continue;
						}

						setCookie(`cities_${i}`, chunkStr, {
							expires: expiryDate,
							secure: process.env.NODE_ENV === "production",
							path: "/",
							sameSite: "lax",
						});
					}
				})
				.catch((error) => {
					console.error("Error fetching cities list:", error);
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
