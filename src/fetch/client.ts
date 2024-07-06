import { API_URL, appId } from "config";
import { getCookie } from "cookies-next";
import { toast } from "react-toastify";

const getAuthHeader = () => {
	const tokenCookie = `Bearer ${getCookie("clientToken")}`;

	const headers: Record<string, string> = {};
	if (tokenCookie) headers["Authorization"] = tokenCookie;

	return headers;
};

export const post = async (
	path: string,
	data: any,
	withAuth = false,
	withFormData = false
) => {
	const headers: any = withAuth ? getAuthHeader() : {};

	if (!withFormData) {
		headers["Content-Type"] = "application/json";
	}

	const body = withFormData ? data : JSON.stringify(data);

	const res = await fetch(`${API_URL}/${path}`, {
		method: "POST",
		headers,
		body,
	});

	let parsedRes;
	try {
		parsedRes = await res.json();
	} catch (error) {
		return toast.error("Failed to parse response");
	}

	if (!res.ok) {
		return toast.error(
			`Error ${res.status}: ${parsedRes.message || res.statusText}`
		);
	}

	return parsedRes;
};

export const patch = async (
	path: string,
	data: any,
	withAuth = false,
	withFormData = false
) => {
	const headers: any = withAuth ? getAuthHeader() : {};

	if (!withFormData) {
		headers["Content-Type"] = "application/json";
	}

	console.log(headers);

	const res = await fetch(`${API_URL}/${path}`, {
		method: "PATCH",
		headers,
		body: withFormData ? data : JSON.stringify(data),
	});

	let parsedRes;
	try {
		parsedRes = await res.json();
	} catch (error) {
		return toast.error("Failed to parse response");
	}

	if (!res.ok) {
		return toast.error(
			`Error ${res.status}: ${parsedRes.message || res.statusText}`
		);
	}

	return parsedRes;
};

export const del = async (path: string, withAuth = false) => {
	const res = await fetch(`${API_URL}/${path}`, {
		method: "DELETE",
		headers: { ...(withAuth && getAuthHeader()) },
	});
	const parsedRes = await res.json();
	if (!res.ok) {
		return toast.error(parsedRes);
	}
	return parsedRes;
};

export const get = async (
	path: string,
	withAuth = false,
	customHeaders?: HeadersInit
) => {
	const headers: HeadersInit = { "app-id": appId as string };

	if (withAuth) {
		Object.assign(headers, getAuthHeader());
	}

	// If custom headers are provided, merge them with existing headers
	if (customHeaders) {
		Object.assign(headers, customHeaders);
	}

	const res = await fetch(`${API_URL}/${path}`, {
		headers,
	});

	const data = await res.json();

	if (!res.ok) {
		throw new Error(data?.message);
	}

	return data;
};
