"use client";

import Image from "next/image";
import { useEffect } from "react";

const OpenApp = () => {
	return (
		<div className="bg-gray-50 flex  mx-3 rounded-lg justify-between mt-4 px-2 py-4 text-white">
			<Image src={"/logo.svg"} width={60} height={30} alt="logo" />

			<a
				id="my-cool-app"
				href="welp"
				className="bg-secondary p-2 px-4 rounded-full decoration-">
				فتح الأبليكيشن
			</a>
		</div>
	);
};

export default OpenApp;
