import { axiosClientBase } from "config/axios-instance";

export const getCitiesList = async () => {
	try {
		const { data } = await axiosClientBase.get("/cities");

		return data;
	} catch (error) {
		return Response.json({ error });
	}
};
