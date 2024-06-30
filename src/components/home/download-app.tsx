import { Link } from "navigation";
import Image from "next/image";
import React from "react";

const DownloadApp = ({ translation }: { translation: any }) => {
	return (
		<div className="flex px-10 flex-col md:flex-row md:px-28 bg-orange-200 min-h-96 gap-8  py-10 md:py-0  my-10  ">
			<div className="flex flex-col  flex-1  justify-center order-2 md:order-1">
				<h1 className="text-4xl font-bold my-2">
					{translation.download}
				</h1>
				<p className="font-light text-gray-900 my-2">
					{translation.available}
				</p>

				<div className=" flex gap-[40px] mt-4">
					<Link
						target="_blank"
						href={
							"https://play.google.com/store/apps/details?id=com.welp.welp"
						}>
						<Image
							src={"/google-store.png"}
							width={150}
							height={120}
							alt="google"
						/>
					</Link>
					<Link
						target="_blank"
						href={
							"https://apps.apple.com/us/app/welp-rating-social-reviews/id6478454000"
						}>
						<Image
							src={"/app-store.png"}
							width={150}
							height={120}
							alt="apple"
						/>
					</Link>
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
