import Image from "next/image";
import React from "react";

const TermsHeader = () => {
	return (
		<div className="flex  md:flex-row flex-col px-5 md:px-10 pt-10  items-center w-full justify-start min-h-[50vh] md:min-h-[90vh]">
			<div className="order-1 md:order-2 md:flex-1 h-[30vh]  md:h-[70vh] ">
				<Image
					src="/terms-header.svg"
					width={200}
					height={200}
					alt="business"
					className="h-full w-full"
				/>
			</div>
			<div className="order-2 md:order-1 flex flex-1 flex-col ">
				<div className="font-bold text-[40px] md:text-[80px]">
					Terms of use
				</div>
			</div>
		</div>
	);
};

export default TermsHeader;
