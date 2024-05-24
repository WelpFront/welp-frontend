import axios from "axios";
import { baseURL, appId } from "config";

export const axiosServerBase = axios.create({
	baseURL,
	timeout: 30000,
	headers: {
		APPID: appId,
	},
});
export const axiosClientBase = axios.create({
	baseURL,
	timeout: 30000,
	headers: {
		APPID: appId,
	},
});
