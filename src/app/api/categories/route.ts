import { axiosServerBase } from "config";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request, context: any) {
	try {
		const { data } = await axiosServerBase.get("/utilities/categories");

		return Response.json({
			status: 200,
			message: "success",
			data: data.data,
		});
	} catch (error) {
		return Response.json({ error });
	}
}
