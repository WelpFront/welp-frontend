import { OpeningHoursType } from "interfaces";

export const getOpenedHourHandler = (
	openingHours: Array<OpeningHoursType>,
	open: boolean
) => {
	const date = new Date();

	const fromOrTo = open ? "time_from" : "time_to";

	const time = openingHours
		.find((item) => item.day == date.getDay())
		?.[fromOrTo].split(":")[0];

	if (time?.charAt(0) === "0") {
		return `${time.substring(1)} ص`;
	} else {
		return `${time} م`;
	}
};
