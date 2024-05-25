import { MediaType } from "interfaces";
import Image from "next/image";
import React from "react";

const MediaCard = ({ item }: { item: MediaType }) => {
	return (
		<div className="rounded-lg overflow-hidden">
			<Image
				src={item.file}
				className="  object-cover h-32 w-full"
				width={150}
				height={30}
				alt={"media"}
			/>
		</div>
	);
};

export default MediaCard;
