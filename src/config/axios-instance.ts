import axios from "axios";
import { baseURL, appId } from "config";

export const axiosBase = axios.create({
	baseURL,
	timeout: 30000,
	headers: {
		APPID: appId,
	},
});
