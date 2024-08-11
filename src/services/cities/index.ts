import * as client from "fetch/client";

export const getCitiesList = async () => {
	try {
		const response = await client.get("utilities/cities");

		console.log(response.data);

		return response;
	} catch (error) {
		return Response.json({ error });
	}
};
