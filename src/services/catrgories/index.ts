export const getCategoriesList = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_CLIENT_URL}/categories`
	);

	const { data } = await response.json();

	return data;
};
