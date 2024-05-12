"use client";

import { FeaturedCard, CustomSwiper } from "atoms";
import { BusinessType } from "interfaces";
import Image from "next/image";
import React from "react";
import { SwiperSlide } from "swiper/react";

const Featured = ({
	featuredBusinesses,
}: {
	featuredBusinesses: Array<{}>;
}) => {
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

	return (
		<div>
			<h1 className="text-center text-black text-3xl font-bold">
				Featured Restaurants
			</h1>

			<CustomSwiper breakPoints={breakpoints as any} slidesPerView={3}>
				{featuredBusinesses.map((item, index) => (
					<SwiperSlide className="py-2" key={index}>
						<FeaturedCard item={item as BusinessType} />
					</SwiperSlide>
				))}
			</CustomSwiper>
		</div>
	);
};

export default Featured;
