export const getBusiness = async (slug: string) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_CLIENT_URL}/businesses/${slug}`
	);

	const { data } = await response.json();

	return data;
};

export const getBusinessProductTypes = async (id: number) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_CLIENT_URL}/businesses/${id}/product-types`
	);

	const { data } = await response.json();

	return data;
};
