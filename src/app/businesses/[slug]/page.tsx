import { BusinessHeader, Menu, OpenApp } from "components";
import { Metadata } from "next";
import { getBusiness } from "services";

export async function generateMetadata({ params }: any): Promise<Metadata> {
	const { slug } = params;

	const data = await getBusiness(slug);

	return {
		title: data.name,
		description: data.description,
		openGraph: {
			images: [
				{
					url: data.cover_image,
				},
			],
		},
	};
}
const page = async ({ params }: any) => {
	const { slug } = params;

	const business = await getBusiness(slug);

	return (
		<div>
			<OpenApp />
			<BusinessHeader business={business} />
			<Menu id={business.id} />
		</div>
	);
};

export default page;
