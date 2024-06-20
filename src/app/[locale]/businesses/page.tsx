import {
	BusinessPageInfo,
	DownloadBusinessApp,
	ForBusinessesHeader,
} from "components";
import { getTranslations } from "next-intl/server";

const BusinessesPage = async () => {
	const forBusinessesT = await getTranslations("forBusinesses");

	return (
		<div>
			<ForBusinessesHeader
				translation={{
					presence: forBusinessesT("presence"),
					downloadItOn: forBusinessesT("downloadItOn"),
					getItOn: forBusinessesT("getItOn"),
				}}
			/>
			<BusinessPageInfo
				translation={{
					benefits: forBusinessesT("benefits"),
					presence: forBusinessesT("presence"),
					addPortfolio: forBusinessesT("addPortfolio"),
					maintain: forBusinessesT("maintain"),
					benefitsDescription: forBusinessesT("benefitsDescription"),
					reviews: forBusinessesT("reviews"),
					reviewsDescription: forBusinessesT("reviewsDescription"),
				}}
			/>
			<DownloadBusinessApp
				translation={{
					download: forBusinessesT("download"),
					downloadItOn: forBusinessesT("downloadItOn"),
					getItOn: forBusinessesT("getItOn"),
				}}
			/>
		</div>
	);
};

export default BusinessesPage;
