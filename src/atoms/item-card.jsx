"use client";

import { Modal } from "atoms";
import Image from "next/image";
import { useState } from "react";

const ItemCard = () => {
	const [isOpened, setIsOpened] = useState(false);

	const data = {
		isOpened,
		setIsOpened,
		title: "سلطة فراخ",
		description: "فراخ-خس- جزر- افوكادو- بنجر- زيت زيتون- خيار- طماطم",
	};

	return (
		<>
			<Modal data={data} />
			<div
				role="button"
				className="flex justify-start gap-3 overflow-hidden rounded-md my-4 bg-white cursor-pointer"
				onClick={() => setIsOpened(true)}>
				<Image
					className="object-cover"
					src="/zacks.png"
					width={100}
					height={200}
					alt="restaurant"
				/>
				<div className="flex flex-col items-start justify-start gap-1 my-2">
					<h1 className="font-bold">سلطة فراخ</h1>
					<p className="text-gray-600 text-sm">
						فراخ-خس- جزر- افوكادو- بنجر- زيت زيتون- خيار- طماطم
					</p>

					<p className="text-secondary text-sm font-bold">250 ج.م</p>
				</div>
			</div>
		</>
	);
};

export default ItemCard;
