import {
	AboutBusiness,
	BusinessLocation,
	BusinessOpen,
	BusinessReviews,
	BusinessesHeader,
	MenuSector,
	Rating,
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

	const {
		name,
		city_name,
		business_type,
		description,
		whatsapp,
		phone_number,
		location_name,
		website,
		latitude,
		longitude,
		is_opened,
		reviews_stats,
	} = await getBusiness(slug);

	return (
		<div>
			<BusinessesHeader
				title={name}
				city={city_name}
				type={business_type}
			/>

			<div className="grid grid-cols-12 gap-4 px-4 md:px-12 my-6">
				<div className="col-span-12 md:col-span-8 ">
					<AboutBusiness about={description} />

					<BusinessReviews />

					<MenuSector />
				</div>
				<div className="col-span-12 md:col-span-4 ">
					<BusinessLocation
						name={name}
						lng={parseInt(longitude) || 31.224291}
						lat={parseInt(latitude) || 30.045916}
						whatsapp={whatsapp}
						phone={phone_number}
						location={location_name}
						website={website}
					/>

					<BusinessOpen isOpened={is_opened} />

					<Rating ratingStats={reviews_stats} />
				</div>
			</div>
		</div>
	);
};

export default BusinessPage;
