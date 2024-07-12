import { TermsBody, TermsHeader } from "components";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

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
		title: t("terms"),
		openGraph: {
			title: t("terms"),
			description: t("terms"),
		},
	};
}
const TermsOfUse = async () => {
	const termsT = await getTranslations("termsOfUse");

	return (
		<div className=" px-5 md:px-10">
			<TermsHeader
				translation={{
					header: termsT("header"),
				}}
			/>

			<TermsBody
				translation={{
					termsOfUseForCustomers: termsT("termsOfUseForCustomers"),
					introduction: termsT("introduction"),
					month: termsT("month"),
					version: termsT("version"),
					introductionDescription: termsT("introductionDescription"),
					responsibilities: termsT("responsibilities"),
					guidelines: termsT("guidelines"),
					ownership: termsT("ownership"),
					whatYouOwn: termsT("whatYouOwn"),
					welpsRightToUse: termsT("welpsRightToUse"),
					feedback: termsT("feedback"),
					problemsAndSupport: termsT("problemsAndSupport"),
					impartiality: termsT("impartiality"),
					privacyAndDataUse: termsT("privacyAndDataUse"),
					personalData: termsT("personalData"),
					confidentialInformation: termsT("confidentialInformation"),
					keepingItConfidential: termsT("keepingItConfidential"),
					terminationAndSuspension: termsT(
						"terminationAndSuspension"
					),
					ourRights: termsT("ourRights"),
					yourRights: termsT("yourRights"),
					importantHousekeeping: termsT("importantHousekeeping"),
					changesToTheseTerms: termsT("changesToTheseTerms"),
					changesToOurPlatform: termsT("changesToOurPlatform"),
					eventsOutsideOurControl: termsT("eventsOutsideOurControl"),
					language: termsT("language"),
					enforcementOfTerms: termsT("enforcementOfTerms"),
					interpretation: termsT("interpretation"),
					contractingEntitiesAndGoverningLaw: termsT(
						"contractingEntitiesAndGoverningLaw"
					),
					address: termsT("address"),
					grandAve: termsT("grandAve"),
					covUsa: termsT("covUsa"),
				}}
			/>
		</div>
	);
};

export default TermsOfUse;
