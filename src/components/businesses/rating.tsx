import { ProgressBar } from "atoms";
import { ReviewsStats } from "interfaces";
import { IoIosStar } from "react-icons/io";

const Rating = ({
	ratingStats,
	translation,
}: {
	ratingStats: ReviewsStats;
	translation: any;
}) => {
	const {
		rating_1_count,
		rating_2_count,
		rating_3_count,
		rating_4_count,
		rating_5_count,
		rating_score,
		reviews_count,
	} = ratingStats;

	const getPercentage = (rateCount: number) => {
		if (rateCount > 0) {
			return (rateCount * 100) / reviews_count;
		}
		return 0;
	};

	return (
		<div>
			<h3 className="text-xl my-1">{translation.rating}</h3>

			<div className=" p-3 w-full rounded-3xl overflow-hidden border-1 border-solid border-gray-100 flex flex-col items-start justify-center ">
				<div className="flex w-full items-center justify-center gap-5">
					<div className="flex flex-col items-center justify-center ">
						<h3 className="text-xl font-bold">
							{rating_score?.toFixed(2)}
						</h3>
						<h4 className="text-md flex  items-center justify-center gap-1">
							({reviews_count})<span>{translation.review}</span>
						</h4>
					</div>

					<div className="flex gap-1 items-center justify-between flex-col w-full">
						<div className="flex items-center  gap-2 w-full">
							<div className="flex items-center gap-1">
								5
								<IoIosStar className="w-5 h-5 text-yellow-500" />
							</div>
							<ProgressBar
								percentage={getPercentage(rating_5_count)}
							/>
						</div>
						<div className="flex items-center  gap-2 w-full">
							<div className="flex items-center gap-1">
								4
								<IoIosStar className="w-5 h-5 text-yellow-500" />
							</div>
							<ProgressBar
								percentage={getPercentage(rating_4_count)}
							/>
						</div>
						<div className="flex items-center  gap-2 w-full">
							<div className="flex items-center gap-1">
								3
								<IoIosStar className="w-5 h-5 text-yellow-500" />
							</div>
							<ProgressBar
								percentage={getPercentage(rating_3_count)}
							/>
						</div>
						<div className="flex items-center  gap-2 w-full">
							<div className="flex items-center gap-1">
								2
								<IoIosStar className="w-5 h-5 text-yellow-500" />
							</div>
							<ProgressBar
								percentage={getPercentage(rating_2_count)}
							/>
						</div>
						<div className="flex items-center  gap-2 w-full">
							<div className="flex items-center gap-1">
								1
								<IoIosStar className="w-5 h-5 text-yellow-500" />
							</div>
							<ProgressBar
								percentage={getPercentage(rating_1_count)}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rating;
