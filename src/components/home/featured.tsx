"use client";

import { FeaturedCard, CustomSwiper } from "atoms";
import { BusinessType } from "interfaces";
import { Link } from "navigation";
import React from "react";
import { SwiperSlide } from "swiper/react";

const Featured = ({
	featuredBusinesses,
	translation,
	locale,
}: {
	featuredBusinesses: Array<BusinessType>;
	translation: any;
	locale: string;
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
				{translation.featuredBusinesses}
			</h1>

			<CustomSwiper
				breakPoints={breakpoints as any}
				slidesPerView={3}
				className="featuredSwiper">
				{featuredBusinesses.map((item, index) => (
					<SwiperSlide className="py-2" key={index}>
						<Link href={`/biz/businesses/${item.id}`}>
							<FeaturedCard item={item} locale={locale} />
						</Link>
					</SwiperSlide>
				))}
			</CustomSwiper>
		</div>
	);
};

export default Featured;
