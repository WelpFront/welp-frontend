import Image from "next/image";
import React from "react";

const DownloadApp = () => {
	return (
		<div className="flex px-10 flex-col md:flex-row md:px-28 bg-white min-h-screen ">
			<div
				dir="ltr"
				className="flex flex-col order-2 flex-1  justify-center">
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
			<div className="order-1 flex-1 flex align-center">
				<Image
					src="/iphone.svg"
					width={200}
					height={200}
					alt="iphone"
				/>
			</div>
		</div>
	);
};

export default DownloadApp;
