import { axiosServerBase } from "config";

export const getCategoriesList = async (exclude_first_parent: boolean) => {
	try {
		const { data: response } = await axiosServerBase.get(
			`/utilities/categories?exclude_first_parent=${exclude_first_parent}`
		);

		return response.data;
	} catch (error) {
		return Response.json({ error });
	}
};
