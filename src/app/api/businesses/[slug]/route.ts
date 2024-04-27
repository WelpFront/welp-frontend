import { axiosBase } from "config";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request, context: any) {
	const { params } = context;

	try {
		const { data } = await axiosBase.get(`businesses/${params.slug}`);
		return Response.json({
			status: 200,
			message: "success",
			data: data.data,
		});
	} catch (error) {
		return Response.json({ error });
	}
}
