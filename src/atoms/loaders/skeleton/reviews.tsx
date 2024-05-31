import React from "react";

const ReviewsLoader = () => {
	const array = [1, 2, 3];
	return (
		<div className="flex flex-col  border-1 border-solid border-gray-100 p-3 rounded-xl text-xs md:text-md">
			{array.map((index) => (
				<div
					key={index}
					dir="ltr"
					className="flex justify-start gap-3 overflow-hidden rounded-md my-4 bg-white cursor-pointer">
					<div className=" bg-gray-200  rounded-full w-32 h-28 animate-pulse"></div>
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
			))}
		</div>
	);
};

export default ReviewsLoader;
