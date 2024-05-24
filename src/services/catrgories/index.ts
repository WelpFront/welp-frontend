import { axiosServerBase } from "config";

export const getCategoriesList = async () => {
	try {
		const { data: response } = await axiosServerBase.get(
			"/utilities/categories"
		);

		return response.data;
	} catch (error) {
		return Response.json({ error });
	}
};
