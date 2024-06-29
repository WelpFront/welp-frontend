"use client";

import { Modal } from "atoms";
import { MediaType } from "interfaces";
import Image from "next/image";
import { useState } from "react";

const MediaCard = ({ item }: { item: MediaType }) => {
	const [isOpened, setIsOpened] = useState(false);

	const data = {
		isOpened,
		setIsOpened,
	};
	return (
		<div className="rounded-lg shadow-lg overflow-hidden">
			<Modal className={"w-full md:w-1/2 min-h-96"} data={data}>
				<Image
					src={item.file}
					className=" rounded-md object-contain mb-5 h-full w-full"
					width={150}
					height={150}
					alt={item.file}
				/>
			</Modal>
			<Image
				onClick={() => setIsOpened(true)}
				src={item.file}
				className="  object-cover h-32 w-full shadow-md cursor-zoom-in"
				width={150}
				height={30}
				alt={"media"}
			/>
		</div>
	);
};

export default MediaCard;
