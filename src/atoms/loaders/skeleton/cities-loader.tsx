"use client";

import React from "react";
import { SwiperSlide } from "swiper/react";

const CitiesLoader = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
			<SwiperSlide className="py-2 mx-2 w-full">
				<div className=" bg-gray-200 rounded-3xl  w-11/12 h-72 animate-pulse"></div>
			</SwiperSlide>
			<SwiperSlide className="py-2 mx-2 w-full">
				<div className=" bg-gray-200 rounded-3xl  w-11/12 h-96 animate-pulse"></div>
			</SwiperSlide>
			<SwiperSlide className="py-2 mx-2 w-full">
				<div className=" hidden md:block bg-gray-200 rounded-3xl  w-11/12 h-72 animate-pulse"></div>
			</SwiperSlide>
			<SwiperSlide className="py-2 mx-2 w-full">
				<div className=" hidden md:block bg-gray-200 rounded-3xl  w-11/12 h-96 animate-pulse"></div>
			</SwiperSlide>
		</div>
	);
};

export default CitiesLoader;
