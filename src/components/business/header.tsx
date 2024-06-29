import Image from "next/image";

const BusinessesHeader = ({
	title,
	city,
	type,
	image,
}: {
	title: string | null;
	city: string;
	type: string;
	image: string;
}) => {
	return (
		<div
			style={{
				background: `url(${image}) center center fixed no-repeat`,
				backgroundSize: "cover",
			}}
			className={`h-129 bg-cover bg-no-repeat bg-right  flex flex-col items-center justify-center gap-10 text-white`}>
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
