import { NextRequest } from "next/server";
import { get } from "utils/fetch";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: NextRequest) {
	const page = request.nextUrl.searchParams.get("page");

	const isOpened = request.nextUrl.searchParams.get("is_opened");

	const priceCategory = request.nextUrl.searchParams.get("price_category");

	const searchKeyword = request.nextUrl.searchParams.get("search");

	const city = request.nextUrl.searchParams.get("city");

	const isDeliveryAvailable = request.nextUrl.searchParams.get(
		"is_delivery_available"
	);

	const categories = request.nextUrl.searchParams.get("categories_in");

	try {
		let url = "businesses/?page_size=9";

		if (page) {
			url += `&page=${page}`;
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

		if (categories) {
			url += `&categories__in=${categories}`;
		}

		if (searchKeyword) {
			url += `&search=${searchKeyword}`;
		}

		if (city) {
			url += `&city=${city}`;
		}

		const data = await get(url);

		return Response.json({
			status: 200,
			message: "success",
			data,
		});
	} catch (error) {
		return Response.json({ error });
	}
}
