"use client";

import BusinessesFiltersContent from "./businesses-filters-content";
import { Drawer } from "atoms";
import Image from "next/image";
import React, { useState } from "react";

const ResponsiveBusinessesFilters = ({ translation }: { translation: any }) => {
	const [openDrawer, setOpenDrawer] = useState(false);
	return (
		<div className="flex lg:hidden w-full border-b-2 border-solid h-10 border-gray-100 my-4 py-2  justify-between items-center ">
			{translation.filters}
			<button
				className="w-6 h-6 cursor-pointer"
				onClick={() => setOpenDrawer(true)}>
				<Image
					src={"/filter.svg"}
					width={10}
					height={10}
					className="w-6 h-6 cursor-pointer"
					alt="filter icon"
				/>
			</button>
			<Drawer
				title={translation.filters}
				opened={openDrawer}
				setOpened={setOpenDrawer}>
				<BusinessesFiltersContent
					translation={{
						filters: translation.filters,
						price: translation.price,
						high: translation.high,
						medium: translation.medium,
						low: translation.low,
						expensive: translation.expensive,
						isOpened: translation.isOpened,
						suggested: translation.suggested,
						offersDelivery: translation.offersDelivery,
					}}
					setOpened={setOpenDrawer}
				/>
			</Drawer>
		</div>
	);
};

export default ResponsiveBusinessesFilters;
