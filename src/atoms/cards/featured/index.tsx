import { Chip } from "atoms";
import { BusinessType } from "interfaces";
import Image from "next/image";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";

const FeaturedCard = ({ item }: { item: BusinessType }) => {
	const ratingHandler = (rate?: number) => {
		if (rate === undefined) {
			return <IoIosStarOutline />;
		} else if (rate > 0 && rate < 1) {
			return <IoIosStarHalf className="text-yellow-500" />;
		} else {
			return <IoIosStar className="text-yellow-500" />;
		}
	};
	return (
		<div className="bg-white shadow-md rounded-md w-4/5 h-80 overflow-hidden">
			<Image
				alt={item.name}
				src={item.cover_image}
				width={250}
				height={150}
				className="object-cover w-full h-48"
			/>
			<div className="flex justify-between items-center px-3">
				<h1 className="text-sm font-bold ">{item.name}</h1>
				{item.is_opened ? (
					<div className="flex  gap-1 text-xs md:text-md">
						<p className="text-success font-bold">مفتوح </p>
					</div>
				) : (
					<div className="flex  gap-1 text-xs md:text-md">
						<p className="text-red-500 font-bold">مغلق</p>
					</div>
				)}
			</div>
			<div className="flex items-center flex-wrap gap-2 px-3 py-1">
				{ratingHandler(item.reviews_stats?.rating_1_count)}
				{ratingHandler(item.reviews_stats?.rating_2_count)}
				{ratingHandler(item.reviews_stats?.rating_3_count)}
				{ratingHandler(item.reviews_stats?.rating_4_count)}
				{ratingHandler(item.reviews_stats?.rating_5_count)}(
				{item.reviews_stats?.reviews_count})
			</div>
			<div className="flex flex-wrap gap-2 px-3 py-1">
				{item.categories.map((category: any) => (
					<Chip
						key={category?.id}
						text={category.name}
						className="bg-gray-400 py-1 px-2 text-white text-xs"
					/>
				))}
			</div>
			<div className="flex items-center  px-3 py-1">
				<SlLocationPin className="text-red-600" />
				{item.city_name}
			</div>
		</div>
	);
};

export default FeaturedCard;
