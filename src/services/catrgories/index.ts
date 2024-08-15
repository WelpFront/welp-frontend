import * as client from "fetch/client";

// import * as server from "fetch/server";

export const getCategoriesList = async (exclude_first_parent: boolean) => {
	try {
		// const { data } = await server.get(`utilities/categories`);

		return {};
	} catch (error) {
		return Response.json({ error });
	}
};

export const getCategory = async (id: string) => {
	try {
		const { data } = await client.get(`utilities/categories/${id}`);

		return data;
	} catch (error) {
		return Response.json({ error });
	}
};
