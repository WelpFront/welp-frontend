import axios from "axios";
import { API_URL, appId, clientBaseURL } from "config";
import { getCookie } from "cookies-next";

function getHeaderValue(
	cookieName: string,
	defaultValue: string,
	transform?: (value: string) => string
): string | undefined {
	const cookieValue = getCookie(cookieName);
	return cookieValue
		? transform
			? transform(cookieValue)
			: cookieValue
		: defaultValue;
}

export const axiosServerBase = axios.create({
	baseURL: API_URL,
	timeout: 30000,
});

export const axiosClientBase = axios.create({
	baseURL: clientBaseURL,
	timeout: 30000,
	headers: {
		APPID: appId,
		"Accept-Language": getHeaderValue("NEXT_LOCALE", "ar", (value) =>
			value.toUpperCase()
		),
		"X-Country-Code": getHeaderValue(
			"location",
			"SA",
			(value) => JSON.parse(value).country
		),
	},
});
