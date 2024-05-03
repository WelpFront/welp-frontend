import { axiosBase } from "config";
import * as url from "url";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request, context: any) {
	const { params } = context;

	const parsedUrl = url.parse(request.url!, true);

	const { product_type } = parsedUrl.query;

	try {
		let url = `/businesses/${params.slug}/products`;

		if (product_type) {
			url += `?product_type=${product_type}`;
		}
		const { data } = await axiosBase.get(url);

		return Response.json({
			status: 200,
			message: "success",
			data,
		});
	} catch (error) {
		return Response.json({ error });
	}
}
