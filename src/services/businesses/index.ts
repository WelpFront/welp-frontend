import axios from "axios";
import { toast } from "react-toastify";

export const getFeaturedBusinesses = async () => {
	const { data: response } = await axios.get(
		`${process.env.NEXT_PUBLIC_CLIENT_URL}/businesses?is_featured=true`
	);

	return response.data;
};

export const getBusiness = async (slug: string) => {
	const { data } = await axios.get(
		`${process.env.NEXT_PUBLIC_CLIENT_URL}/businesses/${slug}`
	);

	return data.data;
};

export const getBusinessProductTypes = async (id: number) => {
	try {
		const { data } = await axios.get(
			`${process.env.NEXT_PUBLIC_CLIENT_URL}/businesses/${id}/product-types`
		);

		return data.data;
	} catch (error: any) {
		toast.error(error.message);
	}
};

export const getBusinessProducts = async (
	businessId: string | string[],
	type: string | null,
	page: number
) => {
	try {
		let url = `${process.env.NEXT_PUBLIC_CLIENT_URL}/businesses/${businessId}/products`;

		if (type) {
			url += `?product_type=${type}`;
		}

		if (page) {
			if (type) {
				url += `&page=${page}`;
			} else {
				url += `?page=${page}`;
			}
		}

		const { data } = await axios.get(url);

		return data.data;
	} catch (error: any) {
		toast.error(error.message);
	}
};
