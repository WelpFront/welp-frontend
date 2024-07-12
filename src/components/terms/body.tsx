import Image from "next/image";
import React from "react";

const TermsBody = ({ translation }: { translation: any }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2">
			<div className="h-[30vh]  md:h-[70vh]">
				<Image
					src="/terms-body.svg"
					width={200}
					height={200}
					alt="business"
					className=" h-full w-full"
				/>
			</div>
			<div className="flex flex-col items-start">
				<h1 className="text-[20px] md:text-[40px]">
					{translation.termsOfUseForCustomers}
				</h1>
				<p>{translation.month}</p>
				<p className=" mb-3">{translation.version}</p>
				<p>{translation.introduction}</p>
				<p>{translation.introductionDescription}</p>
				<p className="my-1">{translation.responsibilities}</p>
				<p className="my-1">{translation.guidelines}</p>
				<p className="my-1">{translation.ownership}</p>
				<p className="my-1">{translation.whatYouOwn}</p>
				<p className="my-1">{translation.welpsRightToUse}</p>
				<p className="my-1">{translation.feedback}</p>
				<p className="my-1">{translation.problemsAndSupport}</p>
				<p className="my-1">{translation.impartiality}</p>
				<p className="my-1">{translation.privacyAndDataUse}</p>
				<p className="my-1">{translation.personalData}</p>
				<p className="my-1">{translation.confidentialInformation}</p>
				<p className="my-1">{translation.keepingItConfidential}</p>
				<p className="my-1">{translation.terminationAndSuspension}</p>
				<p className="my-1">{translation.ourRights}</p>
				<p className="my-1">{translation.yourRights}</p>
				<p className="my-1">{translation.importantHousekeeping}</p>
				<p className="my-1">{translation.changesToTheseTerms}</p>
				<p className="my-1">{translation.changesToOurPlatform}</p>
				<p className="my-1">{translation.eventsOutsideOurControl}</p>
				<p className="my-1">{translation.language}</p>
				<p className="my-1">{translation.enforcementOfTerms}</p>
				<p className="my-1">{translation.interpretation}</p>
				<p className="my-1">
					{translation.contractingEntitiesAndGoverningLaw}
				</p>
				<p className="my-1">{translation.address}</p>
				<p className="my-1">{translation.grandAve}</p>
				<p className="my-1">{translation.covUsa}</p>
			</div>
		</div>
	);
};

export default TermsBody;
