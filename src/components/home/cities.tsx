"use client";

import { CustomSwiper } from "atoms";
import { url } from "inspector";
import React from "react";
import { SwiperSlide } from "swiper/react";

const Cities = () => {
	const breakpoints = {
		200: {
			slidesPerView: 1,
		},
		700: {
			slidesPerView: 2,
		},
		1000: {
			slidesPerView: 3,
		},
	};

	const cities = [
		{ name: "Cairo", img: "/zacks.png" },
		{ name: "Giza", img: "/zacks.png" },
		{ name: "Hurghada", img: "/zacks.png" },
		{ name: "Alex", img: "/zacks.png" },
	];

	return (
		<div className="bg-gray-200 py-4">
			<div>
				<h1 className="text-center text-black text-3xl font-bold">
					Cities
				</h1>

				<CustomSwiper
					breakPoints={breakpoints as any}
					slidesPerView={4}>
					{cities.map((item, index) => (
						<SwiperSlide className="py-2" key={index}>
							<div
								className={`${
									index % 2 !== 0 ? "h-80" : "h-48"
								} flex items-start justify-center w-full rounded-3xl border border-yellow-500 border-solid text-xl font-semibold text-white
                                `}
								style={{
									background: ` url(${item.img})`,
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover",
								}}>
								{item.name}
							</div>
						</SwiperSlide>
					))}
				</CustomSwiper>
			</div>
		</div>
	);
};

export default Cities;
