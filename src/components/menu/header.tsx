"use client";

import { Chip } from "atoms";
import { Link } from "navigation";
import Image from "next/image";
import { getOpenedHourHandler } from "utils";

const BusinessHeader = ({ business }: any) => {
	const {
		slug,
		name,
		cover_image,
		description,
		reviews_stats,
		categories,
		is_opened,
		opening_hours,
	} = business;

	return (
		<div className="flex gap-2 bg-gray-50 p-3 my-4">
			<Image
				className="rounded-md object-cover w-32 h-36"
				src={cover_image}
				height={100}
				width={150}
				alt="business"
			/>
			<div className="w-full flex-1 flex flex-col gap-4">
				<div className="flex justify-between ">
					<Link
						href={`/biz/businesses/${slug}`}
						className="text-black font-extrabold">
						{name}
					</Link>

					{!!reviews_stats.rating_score && (
						<Chip
							text={reviews_stats.rating_score}
							icon="/star-icon.png"
							className="bg-secondary text-white"
						/>
					)}
				</div>
				<div>
					<p className="text-gray-600 text-sm">{description}</p>
				</div>

				<div className="flex flex-wrap gap-1">
					{categories.map((category: any) => (
						<Chip
							key={category.id}
							text={category.name}
							icon={category.icon}
							className="bg-white border-gray-200 border py-2 px-4"
						/>
					))}
				</div>

				{is_opened ? (
					<div className="flex  gap-1 text-xs md:text-md">
						<p className="text-success font-bold">مفتوح الأن</p>
						<p className="text-black">
							يغلق عند الساعة&nbsp;
							{getOpenedHourHandler(opening_hours, false)}
						</p>
					</div>
				) : (
					<div className="flex  gap-1 text-xs md:text-md">
						<p className="text-red-500 font-bold">مغلق</p>
						<p className="text-black">
							يفتح عند الساعة&nbsp;
							{getOpenedHourHandler(opening_hours, true)}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default BusinessHeader;
