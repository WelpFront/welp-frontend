import { axiosServerBase } from "config";
import { get } from "utils/fetch";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request, context: any) {
	const { params } = context;

	try {
		const data = await get(`utilities/categories/${params.id}`);

		return Response.json({
			status: 200,
			message: "success",
			data: data.data,
		});
	} catch (error) {
		return Response.json({ error });
	}
}
