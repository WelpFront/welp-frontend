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
			<h3 className="text-xl my-1 font-bold">{translation.about}</h3>
			<div
				className={`border-1 border-solid border-gray-100 p-3 rounded-3xl text-justify  min-h-[40vh] overflow-y-auto ${
					(!about || about.length === 0) &&
					" flex items-center justify-center"
				}`}>
				{about ? (
					<p>{about}</p>
				) : (
					<p className="text-lg">{translation.noDescription}</p>
				)}
			</div>
		</div>
	);
};

export default AboutBusiness;
