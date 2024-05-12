import Image from "next/image";
import React from "react";

const Footer = () => {
	return (
		<div className="flex flex-col gap-4">
			<div
				dir="ltr"
				className="flex bg-white rounded-t-3xl shadow-inner py-2 items-start justify-around">
				<div className="flex flex-col gap-2 items-center justify-center">
					<Image
						src="/logo.svg"
						width={100}
						height={100}
						alt="logo"
					/>
					<p className="font-bold">Best reviews platform </p>
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
					<h1 className="text-lg"> Important Links</h1>
					<ol className="text-gray-500 list-disc ms-5">
						<li>Home</li>
						<li>Home</li>
						<li>Home</li>
						<li>Home</li>
					</ol>
				</div>
				<div className="flex flex-col items-start justify-start gap-2 ">
					<h1 className="text-lg"> Contact us</h1>
					<div className=" flex flex-col text-gray-500">
						<p>Address: California</p>
						<p>Phone: +1 (949) 993-8566</p>
						<p>Email : w.star@welp.cpm</p>
					</div>
				</div>
			</div>

			<div className="text-center text-sm text-gray-500 font-semibold">
				Copyright 2024 Welp Corporation.
			</div>
		</div>
	);
};

export default Footer;
