import { axiosClientBase } from "config/axios-instance";
import { toast } from "react-toastify";
import { get } from "utils/fetch";

export const getBusinessesList = async (
	page: number,
	categories: Array<number> | [],
	isOpened: boolean,
	priceCategory: string | null,
	isDeliveryAvailable: boolean
) => {
	try {
		const validCategories = categories?.filter(
			(category) => typeof category === "number" && !isNaN(category)
		);

		let url = `/businesses?page=${page}`;

		if (validCategories?.length > 0) {
			url += `&categories_in=${validCategories.join(",")}`;
		}

		if (isOpened) {
			url += `&is_opened=${isOpened}`;
		}

		if (priceCategory) {
			url += `&price_category=${priceCategory}`;
		}

		if (isDeliveryAvailable) {
			url += `&is_delivery_available=${isDeliveryAvailable}`;
		}

		const { data: response } = await axiosClientBase.get(url);

		return response.data;
	} catch (error: any) {
		toast.error(error.message);
	}
};

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
