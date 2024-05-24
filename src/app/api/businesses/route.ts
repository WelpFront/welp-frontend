import { axiosBase } from "config";
import * as url from "url";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request, context: any) {
	const parsedUrl = url.parse(request.url!, true);

	const { is_featured } = parsedUrl.query;
	try {
		const { data } = await axiosBase.get(`/businesses`, {
			params: { is_featured: true },
		});


		return Response.json({
			status: 200,
			message: "success",
			data: data.results,
		});
	} catch (error) {
		return Response.json({ error });
	}
}
