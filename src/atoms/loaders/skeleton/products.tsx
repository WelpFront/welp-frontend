import React from "react";

const ProductsLoader = ({
	className,
	withShadow,
}: {
	className?: string;
	withShadow?: boolean;
}) => {
	return (
		<div
			className={`flex justify-start gap-3 overflow-hidden rounded-md my-4 bg-white cursor-pointer p-[8px] ${className}`}
			style={{
				boxShadow: withShadow ? "0px 0px 6px 0px #00000040" : "",
			}}>
			<div className=" bg-gray-200   w-32 h-24 animate-pulse rounded-md"></div>
			<div className="flex flex-col items-start justify-start gap-1 my-2 w-full">
				<div className=" bg-gray-200 rounded-md  w-28 h-4 animate-pulse"></div>
				<div className=" bg-gray-200 rounded-md  w-3/4 h-4 animate-pulse"></div>
				<div className=" bg-gray-200 rounded-md  w-full h-4 animate-pulse"></div>

				<div className=" bg-gray-200 rounded-md  w-14 h-4 animate-pulse"></div>
			</div>
		</div>
	);
};

export default ProductsLoader;
