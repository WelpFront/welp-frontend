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
			className={`rounded-full  flex gap-1 items-center justify-center ${className}`}>
			<h2 className="text-[15px]">{text}</h2>
			{icon && (
				<Image
					width={10}
					height={10}
					className="w-[16px] h-[16px]"
					alt="star"
					src={icon}
				/>
			)}
		</div>
	);
};

export default Chip;
