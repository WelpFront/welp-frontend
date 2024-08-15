import * as client from "fetch/client";

export const getCategory = async (id: string) => {
	try {
		const { data } = await client.get(`utilities/categories/${id}`);

		return data;
	} catch (error) {
		return Response.json({ error });
	}
};
