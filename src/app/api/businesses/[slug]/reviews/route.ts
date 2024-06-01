import { axiosServerBase } from "config";
import * as url from "url";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request, context: any) {
	const { params } = context;

	const parsedUrl = url.parse(request.url!, true);

	const { page } = parsedUrl.query;

	try {
		let url = `/businesses/${params.slug}/reviews`;

		if (page) {
			url += `?page=${page}`;
		}
		const { data: response } = await axiosServerBase.get(url);

		return Response.json({
			status: 200,
			message: "success",
			data: response,
		});
	} catch (error) {
		return Response.json({ error });
	}
}
