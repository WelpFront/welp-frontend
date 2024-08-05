import { axiosClientBase } from "config/axios-instance";

export const dynamic = "force-dynamic"; // defaults to auto

export async function getBusinessReviews(businessSlug: string, page: number) {
	try {
		const { data: response } = await axiosClientBase.get(
			`/businesses/${businessSlug}/reviews?page=${page}`
		);

		return response.data;
	} catch (error) {
		return error;
	}
}
