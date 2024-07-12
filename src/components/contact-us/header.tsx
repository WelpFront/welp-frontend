import React from "react";

const ContactHeader = ({ translation }: { translation: any }) => {
	return (
		<div className="bg-[url(/contactUs.jpg)] h-screen">
			<div className="bg-[rgba(0,0,0,0.5)] h-full w-full flex items-center justify-center">
				<h1 className="text-white text-[35px] text-center md:text-[80px] ">
					{translation.contactUs}
				</h1>
			</div>
		</div>
	);
};

export default ContactHeader;
