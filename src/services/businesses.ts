export const getBusiness = async (slug: string) => {
	const response = await fetch(`${process.env.LOCAL_URL}/businesses/${slug}`);

	const { data } = await response.json();

	return data;
};
