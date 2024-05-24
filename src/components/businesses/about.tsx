import React from "react";

const AboutBusiness = ({ about }: { about: string }) => {
	return (
		<div className="text-start">
			<h3 className="text-xl">About</h3>
			<div className="border-1 border-solid border-gray-100 p-3 rounded-xl text-justify">
				is simply dummy text of the printing and typesetting industry.
				Lorem Ipsum has been the industrys standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type
				and scrambled it to make a type specimen book. It has survived
				not only five centuries, but also the leap into electronic
				typesetting, remaining essentially unchanged. It was popularised
				in the 1960s with the release of Letraset sheets containing
				Lorem Ipsum passages, and more recently with desktop publishing
				software like Aldus PageMaker including versions of Lorem Ipsum.
			</div>
		</div>
	);
};

export default AboutBusiness;
