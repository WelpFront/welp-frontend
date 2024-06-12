import { Link } from "navigation";
import Image from "next/image";
import React from "react";

const Footer = ({ translation }: { translation: any }) => {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col md:flex-row bg-white rounded-t-3xl shadow-inner py-2 px-10 items-center md:items-start justify-start  md:justify-around gap-5 md:gap-14">
				<div className="flex flex-col gap-2 w-full items-center justify-center">
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
				<div className="flex w-full flex-col items-start justify-start gap-2 md:ps-10">
					<h1 className="text-lg"> {translation.importantLinks}</h1>
					<ol className="text-gray-500 list-disc ms-5 flex flex-col gap-3 text-sm">
						<li>{translation.home}</li>
						<li>{translation.blog}</li>
						<li>{translation.forBusinesses}</li>
						<li>{translation.aboutUs}</li>
						<li>{translation.termsConditions}</li>
						<li>{translation.privacyPolicy}</li>
					</ol>
				</div>
				<div className="flex flex-col w-full items-start justify-start gap-2 text-sm ">
					<h1 className="text-lg">{translation.offices}</h1>
					<div className=" flex flex-col items-start justify-center text-gray-500">
						<p className="flex gap-1 text-sm">
							{translation.usa}:
							<span className="text-xs">
								{" "}
								{translation.losAngles}
							</span>
						</p>
						<p className="flex gap-1 my-2 text-sm">
							{translation.egypt}:<span>{translation.cairo}</span>
						</p>
					</div>
					<h1 className="text-lg">{translation.contactUs}</h1>
					<div className=" flex flex-col items-start justify-center text-gray-500">
						<p className="flex gap-1">
							{translation.address}: California
						</p>
						<p className="flex gap-1">
							{translation.phone}:{" "}
							<span dir="ltr"> +1 (949) 993-8566</span>
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
				<div className="flex flex-col w-full items-start justify-start gap-2 ">
					<h1 className="text-lg"> {translation.download}</h1>
					<button className="bg-black p-3 text-white rounded-md flex text-sm items-center gap-1 min-w-40">
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
							<p className="text-sm md:text-md tracking-widest">
								Google Play
							</p>
						</div>
					</button>
					<button className="bg-black p-3 text-white rounded-md flex text-sm items-center gap-1 min-w-40">
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
							<p className="text-sm md:text-md tracking-widest">
								App Store{" "}
							</p>
						</div>
					</button>
				</div>
			</div>

			<div className="text-center text-sm text-gray-500 font-semibold">
				{translation.copyRights} | {translation.welpCo}
			</div>
		</div>
	);
};

export default Footer;
