import { get } from "utils/fetch";

export const getCategoriesList = async (exclude_first_parent: boolean) => {
	try {
		const { data } = await get(
			`utilities/categories?exclude_first_parent=${exclude_first_parent}`
		);

		return data;
	} catch (error) {
		return Response.json({ error });
	}
};
