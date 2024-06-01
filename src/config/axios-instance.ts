import axios from "axios";
import { baseURL, appId } from "config";
import { getCookie } from "cookies-next";

export const axiosServerBase = axios.create({
	baseURL,
	timeout: 30000,
	headers: {
		APPID: appId,
		"X-Country-Code": getCookie("location")
			? JSON.parse(getCookie("location") as string).country[0]
			: "EG",
	},
});
export const axiosClientBase = axios.create({
	baseURL,
	timeout: 30000,
	headers: {
		APPID: appId,
	},
});
