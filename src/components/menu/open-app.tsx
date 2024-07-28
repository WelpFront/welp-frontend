"use client";

import Image from "next/image";
import { useState } from "react";

const OpenApp = () => {
	const [isOpening, setIsOpening] = useState(false);

	const handleOpenApp = () => {
		setIsOpening(true);

		// Attempt to open the app
		window.location.href = "welp://biz/businesses/58786/menu?type=22";

		// Fallback URL (e.g., App Store or a web page)
		setTimeout(() => {
			if (!document.hidden) {
				setIsOpening(false);
				window.location.href = "https://example.com"; // Replace with your fallback URL
			}
		}, 1000);
	};

	return (
		<div className="bg-gray-50 flex mx-3 rounded-lg justify-between mt-4 px-2 py-4 text-white">
			<Image src={"/logo.svg"} width={60} height={30} alt="logo" />

			<button
				onClick={handleOpenApp}
				className="bg-secondary p-2 px-4 rounded-full">
				{isOpening ? "Opening app..." : "فتح الأبليكيشن"}
			</button>
		</div>
	);
};

export default OpenApp;
