import React from "react";

const Header = ({ translation }: { translation: any }) => {
	return (
		<div className="header flex items-center justify-center">
			<h1 className="text-3xl md:text-5xl font-bold text-white text-[40px]">
				{translation.bestPlatform}
			</h1>
		</div>
	);
};

export default Header;
