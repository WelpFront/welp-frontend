import axios from "axios";

export const getCategoriesList = async () => {
	const { data: response } = await axios.get(
		`${process.env.NEXT_PUBLIC_CLIENT_URL}/categories`
	);

	return response.data;
};
