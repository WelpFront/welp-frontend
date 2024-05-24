import { Categories, DownloadApp, Featured, Header, Cities } from "components";
import { getCategoriesList, getFeaturedBusinesses } from "services";

const HomePage = async () => {
	const categories = await getCategoriesList();

	const featuredBusinesses = await getFeaturedBusinesses();

	return (
		<>
			<Header />
			<Categories categories={categories} />
			<Featured featuredBusinesses={featuredBusinesses} />
			<Cities />
			<DownloadApp />
		</>
	);
};

export default HomePage;
