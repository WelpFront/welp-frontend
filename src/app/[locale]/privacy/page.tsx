import { PrivacyBody, PrivacyHeader } from "components";
import { getTranslations } from "next-intl/server";

const PrivacyPolicy = async () => {
	const privacyT = await getTranslations("privacy");

	return (
		<div dir={"auto"}>
			<PrivacyHeader />

			<PrivacyBody />
		</div>
	);
};

export default PrivacyPolicy;
