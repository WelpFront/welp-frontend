import Image from "next/image";
import React from "react";

const UsersDownloadHeader = ({ translation }: { translation: any }) => {
	console.log(translation);

	return (
		<div
			className="h-[60vh] md:h-screen rounded-br-[300px] flex items-center justify-start pt-28 flex-col"
			style={{
				background:
					"linear-gradient(97.55deg, rgba(255, 0, 0, 0.3) -2.18%, rgba(243, 179, 1, 0.3) 94.39%)",
			}}>
			<h1 className="  my-4 text-black text-center text-[35px] md:text-[60px]">
				{translation.header}
			</h1>
			<div className=" flex gap-10">
				<Image
					src={"/google-store.png"}
					width={150}
					height={120}
					alt="google"
				/>
				<Image
					src={"/app-store.png"}
					width={150}
					height={120}
					alt="apple"
				/>
			</div>
		</div>
	);
};

export default UsersDownloadHeader;
