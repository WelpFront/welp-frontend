import { Categories, DownloadApp, Featured, Header, Cities } from "components";
import { getTranslations } from "next-intl/server";
import { getCategoriesList, getFeaturedBusinesses } from "services";

const HomePage = async () => {
	const homeT = await getTranslations("home");

	const categories = await getCategoriesList();

	const featuredBusinesses = await getFeaturedBusinesses();

	return (
		<>
			<Header translation={{ bestPlatform: homeT("bestPlatform") }} />
			<Categories
				categories={categories}
				translation={{ more: homeT("more") }}
			/>
			<Featured
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
		</>
	);
};

export default HomePage;
