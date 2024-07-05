import React from "react";

const ReviewsLoader = () => {
	return (
		<div className="flex flex-col  p-3 rounded-xl text-xs md:text-md">
			<div
				dir="ltr"
				className="flex justify-start gap-3 overflow-hidden rounded-md my-4 bg-white cursor-pointer">
				<div className=" bg-gray-200  rounded-full w-[80px] h-[80px]  animate-pulse"></div>
				<div className="flex flex-col items-start justify-start gap-1 my-2 w-full">
					<div className="flex justify-between w-full">
						<div className=" bg-gray-200 rounded-md  w-28 h-4 animate-pulse"></div>
						<div className=" bg-gray-200 rounded-md  w-20 h-4 animate-pulse"></div>
					</div>
					<div className=" bg-gray-200 rounded-md  w-3/4 h-4 animate-pulse"></div>
					<div className=" bg-gray-200 rounded-md  w-1/2 h-4 animate-pulse"></div>

					<div className=" bg-gray-200 rounded-md  w-14 h-4 animate-pulse"></div>
				</div>
			</div>
		</div>
	);
};

export default ReviewsLoader;
