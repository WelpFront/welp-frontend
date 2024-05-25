import axios from "axios";

export const dynamic = "force-dynamic"; // defaults to auto

export async function getBusinessReviews(businessSlug: string, page: number) {
	const { data: response } = await axios.get(
		`${process.env.NEXT_PUBLIC_CLIENT_URL}/businesses/${businessSlug}/reviews?page=${page}`
	);

	return response.data;
}
