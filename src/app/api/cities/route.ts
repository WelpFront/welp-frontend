import { get } from "utils/fetch";

export const GET = async () => {
	try {
		const response = await get("utilities/cities");

		return Response.json({
			status: 200,
			message: "success",
			data: response.data,
		});
	} catch (error) {
		return Response.json({ error });
	}
};
