"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, useSwiper } from "swiper/react";

const CustomSwiper = ({
	slidesPerView = 3,
	children,
	breakPoints,
}: {
	slidesPerView: number;
	children: ReactNode;
	breakPoints: Array<{}>;
}) => {
	const swiper = useSwiper();

	return (
		<div className="py-2 md:px-10 lg:px-20 ">
			<div className="container flex flex-col justify-center px-5 py-2 rounded-md min-h-96 ">
				<div className="relative z-0">
					<Swiper
						modules={[Navigation]}
						navigation={{
							nextEl: ".arrow-right",
							prevEl: ".arrow-left",
						}}
						slidesPerView={slidesPerView}
						spaceBetween={30}
						breakpoints={breakPoints as any}
						pagination={{
							clickable: true,
						}}
						className="mySwiper">
						{children}
					</Swiper>

					<div className="flex items-center justify-center gap-2 mt-6">
						<button
							className={`${
								swiper && swiper.isEnd && "cursor-not-allowed"
							} bg-black text-white rounded-full flex items-center justify-center p-1 arrow-left`}
							disabled={swiper && swiper.isEnd}>
							<IoIosArrowForward className="w-5 h-5" />
						</button>
						<button
							className={`${
								swiper &&
								swiper.isBeginning &&
								"cursor-not-allowed"
							} bg-black text-white rounded-full flex items-center justify-center p-1 arrow-right`}
							disabled={swiper && swiper.isBeginning}>
							<IoIosArrowBack className="w-5 h-5" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomSwiper;
