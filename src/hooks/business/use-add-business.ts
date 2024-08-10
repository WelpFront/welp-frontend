"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { businessRequest } from "services";

const useAddBusinessRequest = () => {
	const [loading, setLoading] = useState(false);

	const [success, setSuccess] = useState(false);

	const addBusinessRequestAction = async (
		name: string,
		description: string,
		location: string,
		city: number,
		image: File
	) => {
		setLoading(true);

		setSuccess(false);
		try {
			const response: any = await businessRequest(
				name,
				description,
				location,
				city,
				image
			);

			setSuccess(true);
			toast.success(response?.message);
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return {
		addBusinessRequestAction,
		loading,
		success,
	};
};

export default useAddBusinessRequest;
