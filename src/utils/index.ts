import { months } from "data";
import { OpeningHoursType } from "interfaces";

const getISODay = function () {
	return ((new Date().getDay() + 6) % 7) + 1;
};

export const getOpenedHourHandler = (
	openingHours: Array<OpeningHoursType>,
	open: boolean
) => {
	const date = getISODay();

	const fromOrTo = open ? "time_from" : "time_to";

	const openingHourItem = openingHours.find(
		(item) => item.day == getISODay()
	);

	if (!openingHourItem) {
		return "Unknown";
	}

	const time = openingHourItem[fromOrTo].split(":")[0];
	const formattedTime = parseInt(time, 10) % 12 || 12; // Convert to 12-hour format

	const period = parseInt(time, 10) < 12 ? "ص" : "م";

	return `${formattedTime} ${period}`;
};

export function formatDate(dateStr: string): string {
	const dateObj = new Date(dateStr);

	const month = months[dateObj.getMonth()];
	const day = dateObj.getDate();
	const year = dateObj.getFullYear();
	let hours = dateObj.getHours();
	const minutes = dateObj.getMinutes();
	const period = hours >= 12 ? "pm" : "am";

	hours = hours % 12 || 12;

	const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

	const formattedDate = `${month} ${day}, ${year} ${hours}:${formattedMinutes} ${period}`;

	return formattedDate;
}
