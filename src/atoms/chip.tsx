import Image from "next/image";
import React from "react";

const Chip = ({
	text,
	icon,
	background,
}: {
	text: string;
	icon?: string;
	background?: string;
}) => {
	return (
		<div
			className={`${
				background ?? "bg-white border-gray-200 border py-2 px-4"
			} px-2 rounded-full min-w-16 flex items-center justify-center`}>
			<h2
				className={`${
					background ? "text-white" : "text-black"
				} text-md`}>
				{text}
			</h2>
			{icon && (
				<Image
					width={10}
					height={10}
					className="w-6 h-6"
					alt="star"
					src={icon}
				/>
			)}
		</div>
	);
};

export default Chip;
