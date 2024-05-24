import {
	AboutBusiness,
	BusinessLocation,
	BusinessReviews,
	BusinessesHeader,
} from "components";
import { Metadata } from "next";
import { getBusiness } from "services";

export async function generateMetadata({ params }: any): Promise<Metadata> {
	const { slug } = params;

	const data = await getBusiness(slug);

	return {
		title: data.name,
		description: data.description,
		keywords: ["مطعم", "مينيو", "ويلب", ...data.name.split(" ")],
		openGraph: {
			images: [
				{
					url: data.cover_image,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
		},
	};
}
const BusinessPage = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params;

	const business = await getBusiness(slug);

	console.log(business);

	return (
		<div>
			<BusinessesHeader
				title={business.name}
				city={business.city_name}
				type={business.business_type}
			/>

			<div className="grid grid-cols-12 gap-4 px-12 my-6">
				<div className=" col-span-8 ">
					<AboutBusiness about={business.description} />

					<BusinessReviews />
				</div>
				<div className=" col-span-4">
					<BusinessLocation
						name={business.name}
						lng={31.224291}
						lat={30.045916}
					/>
				</div>
			</div>
		</div>
	);
};

export default BusinessPage;
