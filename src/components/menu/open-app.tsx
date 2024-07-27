"use client";

import Image from "next/image";
import { useEffect } from "react";

const OpenApp = () => {
	const handleOpenApp = () => {
		window.location.href = "welp://";
	};

	useEffect(() => {
		const handleVisibilityChange = () => {
			if (!document.hidden) {
				window.location.href = process.env
					.NEXT_PUBLIC_FRONTEND_URL as string;
			}
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);

		return () => {
			document.removeEventListener(
				"visibilitychange",
				handleVisibilityChange
			);
		};
	}, []);

	return (
		<div className="bg-gray-50 flex  mx-3 rounded-lg justify-between mt-4 px-2 py-4 text-white">
			<Image src={"/logo.svg"} width={60} height={30} alt="logo" />

			<a
				id="my-cool-app"
				href="welp://"
				className="bg-secondary p-2 px-4 rounded-full decoration-">
				فتح الأبليكيشن
			</a>
		</div>
	);
};

export default OpenApp;
