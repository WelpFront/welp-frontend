import React from "react";

const AboutBusiness = ({
	about,
	translation,
}: {
	about: string;
	translation: any;
}) => {
	return (
		<div className="text-start">
			<h3 className="text-xl my-1">{translation.about}</h3>
			<div
				className={`border-1 border-solid border-gray-100 p-3 rounded-xl text-justify  ${
					about.length === 0 &&
					"min-h-32 flex items-center justify-center"
				}`}>
				{about ? <p>{about}</p> : <p>{translation.noDescription}</p>}
			</div>
		</div>
	);
};

export default AboutBusiness;
