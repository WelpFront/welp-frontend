import Image from "next/image";
import React from "react";

const DownloadBusinessApp = ({ translation }: { translation: any }) => {
	return (
		<div
			className="min-h-[30vh] my-10 flex flex-col md:flex-row items-center justify-between gap-10 py-10  px-5 md:px-20"
			style={{
				background:
					" linear-gradient(97.55deg, rgba(255, 0, 0, 0.3) -2.18%, rgba(243, 179, 1, 0.3) 94.39%)",
			}}>
			<div className="flex flex-1 flex-col gap-5 order-2 md:order-1">
				<div className="font-bold text-3xl md:text-5xl">
					{translation.download}
				</div>
				<div className=" flex gap-10 mt-4">
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
			<div className="flex-1 h-[50vh] md:h-[70vh] flex items-center justify-end order-1 md:order-2">
				<Image
					src={"/business-mobile.svg"}
					width={200}
					height={200}
					className=" h-full"
					alt="download app"
				/>
			</div>
		</div>
	);
};

export default DownloadBusinessApp;
