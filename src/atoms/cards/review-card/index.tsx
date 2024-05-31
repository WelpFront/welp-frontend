import { ReviewType } from "interfaces";
import Image from "next/image";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { formatDate } from "utils";

const ReviewCard = ({ item }: { item: ReviewType }) => {
	const ratingHandler = (rate: number) => {
		const stars = [];

		for (let i = 1; i <= 5; i++) {
			if (rate >= i) {
				stars.push(<IoIosStar className="text-yellow-500" key={i} />);
			} else if (rate >= i - 0.5) {
				stars.push(
					<IoIosStarHalf className="text-yellow-500" key={i} />
				);
			} else {
				stars.push(<IoIosStarOutline key={i} />);
			}
		}

		return stars;
	};
	return (
		<div className="flex flex-col  gap-3" dir="ltr">
			<div className="flex items-start gap-3 md:gap-5 text-gray-400">
				<div>
					<Image
						src={"/default-user.jpg"}
						width={120}
						height={120}
						alt="user"
						className="rounded-full w-10 h-10 md:w-28 md:h-28 flex-1"
					/>
				</div>
				<div className="flex flex-col gap-5 items-start justify-center flex-1 ">
					<div className="flex flex-col gap-2 w-full">
						<h1 className="font-bold">{item.reviewer.name}</h1>
						<h4 className="text-xs whitespace-nowrap">
							{formatDate(item.created_at)}
						</h4>
						<div
							dir="auto"
							className="hidden md:flex w-full md:text-justify bg-red ">
							{item.caption}
						</div>
					</div>
				</div>

				<div className="flex items-center flex-nowrap gap-1 md:gap-2 px-1 md:px-3 py-1 select-none">
					<div className="flex">{ratingHandler(item.rating)}</div>
					<div className="rounded-full w-8 md:w-10 h-5 bg-yellow-400 text-white flex items-center justify-center">
						{item.rating}
					</div>
				</div>
			</div>
			<div
				className="md:hidden flex w-full md:text-justify px-1"
				dir="auto">
				{item.caption}
			</div>
		</div>
	);
};

export default ReviewCard;
