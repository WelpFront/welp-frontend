import Image from "next/image";

const ForBusinessesHeader = ({ translation }: { translation: any }) => {
	return (
		<div className="flex  md:flex-row flex-col px-5 md:px-10 pt-10  items-center w-full justify-start min-h-[80vh] md:min-h-[90vh]">
			<div className="md:flex-1 h-[30vh]  md:h-[70vh] ">
				<Image
					src="/businesses-header.svg"
					width={200}
					height={200}
					alt="business"
					className="h-full w-full"
				/>
			</div>
			<div className="flex flex-1 flex-col ">
				<div className="font-bold text-[20px] md:text-[30px]">
					{translation.presence}
				</div>
				<div className=" flex gap-5 md:gap-10 mt-4">
					<button className="bg-black p-3 text-white rounded-md flex items-center gap-1">
						<Image
							src={"/google-play.svg"}
							width={30}
							height={30}
							alt="google"
						/>
						<div className="flex flex-col items-start">
							<p className="text-xs font-light tracking-tighter">
								{translation.getItOn}
							</p>
							<p className="text-sm md:text-md tracking-wider">
								Google Play
							</p>
						</div>
					</button>
					<button className="bg-black p-3 text-white rounded-md flex items-center gap-1">
						<Image
							src={"/apple.svg"}
							width={30}
							height={30}
							alt="apple"
						/>
						<div className="flex flex-col items-start">
							<p className="text-xs font-light tracking-tighter">
								{translation.downloadItOn}
							</p>
							<p className="text-sm md:text-md tracking-wider">
								App Store
							</p>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ForBusinessesHeader;
