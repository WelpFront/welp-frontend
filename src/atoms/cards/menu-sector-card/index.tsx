import { ProductType } from "interfaces";
import Image from "next/image";
import React from "react";

const MenuSectorCard = ({ item }: { item: ProductType }) => {
	return (
		<div className="flex flex-col  text-black rounded-md overflow-hidden bg-white shadow-md text-xs">
			<Image
				src={item.image}
				className="  object-cover h-32 w-auto"
				width={150}
				height={30}
				alt={item.name}
			/>
			<div className="my-4 flex justify-between px-3">
				<h2 className=" text-lg font-bold leading-tight">
					{item.name}
				</h2>

				<div className="flex flex-col gap-1">
					<p className="text-secondary text-md font-bold">
						{item.price_after_discount} ج.م
					</p>
					{!!item?.price_before_discount && (
						<p className="text-gray-500 line-through text-xs font-bold">
							{item.price_before_discount} ج.م
						</p>
					)}
				</div>
			</div>
			<p className="px-3 text-gray-400 mb-2">{item.description}</p>
		</div>
	);
};

export default MenuSectorCard;
