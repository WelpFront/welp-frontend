import { Link } from "navigation";
import Image from "next/image";
import React from "react";

const DownloadApp = ({ translation }: { translation: any }) => {
	return (
		<div className="flex px-10 md:px-20 flex-col md:flex-row bg-orange-200 min-h-96 gap-8  py-10 md:py-0  my-10  ">
			<div className="flex flex-col  flex-2 text-center md:text-start  justify-center order-2 md:order-1">
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
			<div className=" flex-1 flex justify-center lg:justify-normal align-center relative overflow-hidden order-1 md:order-2 ">
				<Image
					src="/iPhone.svg"
					width={160}
					height={150}
					alt="iPhone"
					className="hidden lg:block absolute left-20 -bottom-32"
				/>
				<Image
					src="/iPhone.svg"
					width={160}
					height={150}
					alt="iphone"
					className="lg:absolute right-20 -top-32"
				/>
			</div>
		</div>
	);
};

export default DownloadApp;
