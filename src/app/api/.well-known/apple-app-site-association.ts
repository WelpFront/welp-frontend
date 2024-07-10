import type { NextApiRequest, NextApiResponse } from "next";

const association = {
	applinks: {
		apps: [],
		details: [
			{
				appID: "YOUR_TEAM_ID.com.welp.welp",
				paths: ["/path/*"],
			},
		],
	},
};

export default (_: NextApiRequest, response: NextApiResponse) => {
	return response.status(200).send(association);
};
