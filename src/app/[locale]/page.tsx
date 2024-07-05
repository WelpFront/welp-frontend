import { Categories, DownloadApp, Featured, Header, Cities } from "components";
import { Metadata } from "next";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";
import { getCategoriesList, getFeaturedBusinesses } from "services";

export const dynamic = "force-dynamic"; // defaults to auto

export async function metadata({
	params: locale,
}: {
	params: any;
}): Promise<Metadata> {
	const t = await getTranslations({
		locale,
		namespace: "metadata",
	});

	return {
		title: t("home"),
		openGraph: {
			title: t("home"),
			description: t("home"),
		},
	};
}

const HomePage = async ({ params }: { params: any }) => {
	unstable_setRequestLocale(params.locale);

	const categories = await getCategoriesList(true);

	const featuredBusinesses = await getFeaturedBusinesses();

	const homeT = await getTranslations("home");

	return (
		<main>
			<Header translation={{ bestPlatform: homeT("bestPlatform") }} />
			<Categories
				categories={categories}
				translation={{ more: homeT("more") }}
			/>
			<Featured
				locale={params.locale}
				featuredBusinesses={featuredBusinesses}
				translation={{
					featuredBusinesses: homeT("featuredBusinesses"),
				}}
			/>
			<Cities
				translation={{
					cities: homeT("cities"),
					cairo: homeT("cairo"),
					alex: homeT("alex"),
					hurghada: homeT("hurghada"),
					giza: homeT("giza"),
					sainai: homeT("sainai"),
				}}
			/>
			<DownloadApp
				translation={{
					download: homeT("download"),
					available: homeT("available"),
					downloadItOn: homeT("downloadItOn"),
					getItOn: homeT("getItOn"),
				}}
			/>
		</main>
	);
};

export default HomePage;
