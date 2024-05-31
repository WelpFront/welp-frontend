import { BusinessHeader, Menu, OpenApp } from "components";
import { Metadata } from "next";
import { ReactNode } from "react";
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

export function getInitialProps({ ctx }: { ctx: any }) {
	let isMobileView = (
		ctx.req ? ctx.req.headers["user-agent"] : navigator.userAgent
	).match(
		/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
	);

	//Returning the isMobileView as a prop to the component for further use.
	return {
		isMobileView: Boolean(isMobileView),
	};
}
const MenuPage = async ({
	params,
	isMobileDevice,
}: {
	params: any;
	isMobileDevice: boolean;
}) => {
	const { slug } = params;

	const business = await getBusiness(slug);

	return (
		<div>
			{isMobileDevice && <OpenApp />}
			<BusinessHeader business={business} />
			<Menu slug={business.id} />
		</div>
	);
};

export default MenuPage;

MenuPage.getLayout = function getLayout({ MenuPage }: { MenuPage: ReactNode }) {
	return <div>{MenuPage}</div>;
};
