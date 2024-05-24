import Image from "next/image";
import React from "react";

const BusinessesHeader = ({
	title,
	city,
	type,
}: {
	title: string | null;
	city: string;
	type: string;
}) => {
	return (
		<div className="h-129 bg-cover bg-no-repeat bg-right bg-[url(/header.png)] flex flex-col items-center justify-center gap-10 text-white">
			<h1 className="text-5xl font-bold text-center"> {title}</h1>

			<div className=" flex items-center gap-5">
				<div className="relative  flex items-center justify-center">
					<Image
						src={"/subtitle.png"}
						width={200}
						height={200}
						alt="subtitle"
					/>
					<h2 className=" absolute  text-lg">{city}</h2>
				</div>
				<div className="relative  flex items-center justify-center">
					<Image
						src={"/subtitle.png"}
						width={200}
						height={200}
						alt="subtitle"
					/>
					<h2 className=" absolute text-lg ">{type}</h2>
				</div>
			</div>
		</div>
	);
};

export default BusinessesHeader;
