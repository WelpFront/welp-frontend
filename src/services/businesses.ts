import axios from "axios";

export const getBusiness = async (slug: string) => {
	const response = await fetch(`http://localhost:3000/api/business/${slug}`);

	const { data } = await response.json();

	return data;
};
