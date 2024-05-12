import {
	Categories,
	DownloadApp,
	Featured,
	Header,
	Footer,
	Cities,
} from "components";
import { getCategoriesList, getFeaturedBusinesses } from "services";

const Home = async () => {
	const categories = await getCategoriesList();

	const featuredBusinesses = await getFeaturedBusinesses();

	return (
		<>
			<Header />
			<Categories categories={categories} />
			<Featured featuredBusinesses={featuredBusinesses} />
			<Cities />
			<DownloadApp />
			<Footer />
		</>
	);
};

export default Home;
