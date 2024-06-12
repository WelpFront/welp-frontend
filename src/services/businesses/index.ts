"use server";

import { axiosClientBase } from "config/axios-instance";
import { toast } from "react-toastify";
import { get } from "utils/fetch";

export const getFeaturedBusinesses = async () => {
	const data = await get(`businesses?is_featured=${true}`);

	return data.results;
};

export const getBusiness = async (slug: string) => {
	const { data } = await get(`businesses/${slug}`);

	return data;
};

export const getBusinessProductTypes = async (id: number) => {
	try {
		const { data: response } = await axiosClientBase.get(
			`/businesses/${id}/product-types`
		);

		return response.data;
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
		let url = `/businesses/${businessId}/products`;

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

		const { data } = await axiosClientBase.get(url);

		return data.data;
	} catch (error: any) {
		toast.error(error.message);
	}
};
