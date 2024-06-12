import { axiosServerBase } from "config";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: NextRequest, context: any) {
	const exclude_first_parent = request.nextUrl.searchParams.get(
		"exclude_first_parent"
	);

	try {
		const { data } = await axiosServerBase.get(
			`/utilities/categories?exclude_first_parent=${exclude_first_parent}`
		);

		return Response.json({
			status: 200,
			message: "success",
			data: data.data,
		});
	} catch (error) {
		return Response.json({ error });
	}
}
