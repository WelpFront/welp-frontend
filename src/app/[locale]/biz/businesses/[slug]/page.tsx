import {
	AboutBusiness,
	BusinessLocation,
	BusinessOpen,
	BusinessReviews,
	BusinessesHeader,
	MediaSector,
	MenuSector,
	Rating,
} from "components";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";
import { getBusiness } from "services";

export async function generateMetadata({ params }: any): Promise<Metadata> {
	unstable_setRequestLocale(params.locale);

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
const BusinessPage = async ({ params }: { params: any }) => {
	unstable_setRequestLocale(params.locale);

	const { slug } = params;

	const businessT = useTranslations("business");

	const {
		id,
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
		products,
		media,
	} = await getBusiness(slug);

	return (
		<div>
			<BusinessesHeader
				title={name}
				city={city_name}
				type={business_type}
			/>

			<div className="grid grid-cols-12 gap-4 px-4 md:px-12 my-6">
				<div className="col-span-12 md:col-span-8 order-2 md:order-1 ">
					<AboutBusiness
						translation={{
							about: businessT("about"),
							noDescription: businessT("noDescription"),
						}}
						about={description}
					/>

					<BusinessReviews
						businessSlug={id.toString()}
						translation={{
							noReviews: businessT("noReviews"),
							reviews: businessT("reviews"),
						}}
					/>

					{products?.length > 0 && (
						<MenuSector
							products={products}
							slug={id}
							translation={{
								menu: businessT("menu"),
								seeAll: businessT("seeAll"),
							}}
						/>
					)}
					{media?.length > 0 && (
						<MediaSector
							media={media}
							translation={{
								media: businessT("media"),
							}}
						/>
					)}
				</div>
				<div className="col-span-12 md:col-span-4  order-1 md:order-2">
					<BusinessLocation
						name={name}
						lng={parseInt(longitude) || 31.224291}
						lat={parseInt(latitude) || 30.045916}
						whatsapp={whatsapp}
						phone={phone_number}
						location={location_name}
						website={website}
						translation={{
							locationAndContact: businessT("locationAndContact"),
							site: businessT("site"),
						}}
					/>

					<BusinessOpen
						isOpened={is_opened}
						translation={{
							isOpened: businessT("isOpened"),
							isClosed: businessT("isClosed"),
						}}
					/>

					<Rating
						translation={{
							rating: businessT("rating"),
							review: businessT("review"),
						}}
						ratingStats={reviews_stats}
					/>
				</div>
			</div>
		</div>
	);
};

export default BusinessPage;

const locales = ["en", "ar"];

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}
