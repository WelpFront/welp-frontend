"use client";

import { CitiesLoader, CustomSwiper } from "atoms";
import { CityType } from "interfaces";
import { useCitiesStore } from "store/cities";
import { SwiperSlide } from "swiper/react";

const Cities = ({ translation }: { translation: any }) => {
	const breakpoints = {
		200: {
			slidesPerView: 2,
		},
		700: {
			slidesPerView: 3,
		},
		1000: {
			slidesPerView: 4,
		},
	};
	const { cities } = useCitiesStore((state) => state);

	return (
		<div className="bg-gray-home py-4 ">
			<div>
				<h1 className="text-center text-black text-3xl font-bold">
					{translation.cities}
				</h1>

				<CustomSwiper
					className="citiesSwiper"
					breakPoints={breakpoints as any}
					slidesPerView={4}>
					{cities?.length === 0 && <CitiesLoader />}

					{cities.map((item: CityType, index: number) => (
						<SwiperSlide className="py-2 mx-2 w-full" key={index}>
							<div
								className={`${
									index % 2 !== 0 ? "h-96" : "h-72"
								} w-full rounded-3xl border overflow-hidden border-yellow-500 border-solid text-xl font-semibold text-white
                                `}
								style={{
									background: ` url(${item.image})`,
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}>
								<div
									className="w-full h-full  flex items-start justify-center"
									style={{
										background:
											"linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.2))",
									}}>
									{item.name}
								</div>
							</div>
						</SwiperSlide>
					))}
				</CustomSwiper>
			</div>
		</div>
	);
};

export default Cities;
