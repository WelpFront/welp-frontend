import Image from "next/image";
import React from "react";

const DownloadApp = () => {
	return (
		<div className="flex px-10 flex-col md:flex-row md:px-28 bg-orange-200 min-h-96 gap-4  py-10 md:py-0   ">
			<div className="flex flex-col  flex-1  justify-center order-2 md:order-1">
				<h1 className="text-4xl font-bold my-2">Download The app</h1>
				<p className="font-semibold my-2">
					Available on Google play and App store
				</p>

				<div className="flex gap-1">
					<button className="bg-black p-3 text-white rounded-md flex items-center gap-1">
						<Image
							src={"/google-play.svg"}
							width={30}
							height={30}
							alt="google"
						/>
						<div className="flex flex-col items-start">
							<p className="text-xs font-light tracking-tighter">
								get it on
							</p>
							<p className="text-md tracking-wider">
								Google Play{" "}
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
								download on the
							</p>
							<p className="text-md tracking-wider">App Store </p>
						</div>
					</button>
				</div>
			</div>
			<div className=" flex-1 flex justify-center md:justify-normal align-center relative overflow-hidden order-1 md:order-2 ">
				<Image
					src="/iPhone.svg"
					width={150}
					height={150}
					alt="iPhone"
					className="hidden md:block absolute left-8 -bottom-32"
				/>
				<Image
					src="/iPhone.svg"
					width={150}
					height={150}
					alt="iphone"
					className="md:absolute right-8 -top-32"
				/>
			</div>
		</div>
	);
};

export default DownloadApp;
