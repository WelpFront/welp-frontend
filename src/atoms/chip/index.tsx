import Image from "next/image";
import React from "react";

const Chip = ({
	text,
	icon,
	className,
}: {
	text: string;
	icon?: string;
	className?: string;
}) => {
	return (
		<div
			className={`rounded-full min-w-16 flex gap-1 items-center justify-center ${className}`}>
			<h2 className="text-md">{text}</h2>
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
