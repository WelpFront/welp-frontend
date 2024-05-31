"use client";

import { ReviewCard, ReviewsLoader } from "atoms";
import { useBusinessReviewsList } from "hooks";

const BusinessReviews = ({
	translation,
	businessSlug,
}: {
	translation: any;
	businessSlug: string;
}) => {
	const { loading, reviews, count } = useBusinessReviewsList(businessSlug);

	return (
		<div className="my-10">
			<h3 className="text-xl my-1">{translation.reviews}</h3>

			{loading ? (
				<ReviewsLoader />
			) : (
				<div
					className={`flex flex-col  border-1 border-solid border-gray-100 p-3 rounded-xl text-xs md:text-md
			${reviews.length === 0 && "min-h-32 flex items-center justify-center"}
			`}>
					{reviews?.map((item, index) => (
						<div key={item.id} className="flex flex-col gap-2">
							<ReviewCard item={item} />
							{index !== count - 1 && <hr className="my-2" />}
						</div>
					))}

					{reviews?.length === 0 && <p>{translation.noReviews}</p>}
				</div>
			)}
		</div>
	);
};

export default BusinessReviews;
