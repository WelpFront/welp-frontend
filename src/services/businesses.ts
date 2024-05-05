import { toast } from "react-toastify";

export const getBusiness = async (slug: string) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_CLIENT_URL}/businesses/${slug}`
	);

	const { data } = await response.json();

	return data;
};

export const getBusinessProductTypes = async (id: number) => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_CLIENT_URL}/businesses/${id}/product-types`
		);

		const { data } = await response.json();

		return data;
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

		const response = await fetch(url);

		const { data } = await response.json();

		return data;
	} catch (error: any) {
		toast.error(error.message);
	}
};
