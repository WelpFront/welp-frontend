import { Link } from "navigation";
import Image from "next/image";
import React from "react";

const Footer = ({ translation }: { translation: any }) => {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col md:flex-row bg-white rounded-t-3xl shadow-inner py-2 items-center md:items-start justify-start  md:justify-around gap-5 md:gap-2">
				<div className="flex flex-col gap-2 items-center justify-center">
					<Image
						src="/logo.svg"
						width={100}
						height={100}
						alt="logo"
					/>
					<p className="font-bold">{translation.bestPlatform}</p>
					<div className="flex gap-2">
						<Image src="/x.svg" width={30} height={30} alt="x" />
						<Image
							src="/facebook.svg"
							width={30}
							height={30}
							alt="facebook"
						/>
						<Image
							src="/instagram.svg"
							width={30}
							height={30}
							alt="instagram"
						/>
						<Image
							src="/tiktok.svg"
							width={30}
							height={30}
							alt="tiktok"
						/>
					</div>
				</div>
				<div className="flex flex-col items-start justify-start gap-2 ">
					<h1 className="text-lg"> {translation.importantLinks}</h1>
					<ol className="text-gray-500 list-disc ms-5">
						<li>Home</li>
						<li>Home</li>
						<li>Home</li>
						<li>Home</li>
					</ol>
				</div>
				<div className="flex flex-col items-start justify-start gap-2 ">
					<h1 className="text-lg">{translation.contactUs}</h1>
					<div className=" flex flex-col items-start justify-center text-gray-500">
						<p className="flex gap-1">
							{translation.address}: California
						</p>
						<p className="flex gap-1">
							{translation.phone}: +1 (949) 993-8566
						</p>
						<p className="flex gap-1">
							{translation.email} :{" "}
							<Link
								href={"mailto:w.star@welp.cpm"}
								target="_blank"
								className="underline">
								w.star@welp.cpm
							</Link>
						</p>
					</div>
				</div>
			</div>

			<div className="text-center text-sm text-gray-500 font-semibold">
				{translation.copyRights} | {translation.welpCo}
			</div>
		</div>
	);
};

export default Footer;
