import { SearchInput } from "atoms";
import React from "react";

const Header = ({ translation }: { translation: any }) => {
	return (
		<div className="header flex items-center justify-center">
			<h1 className=" md:text-5xl text-center font-bold text-white text-[24px] md:text-[40px]">
				{translation.bestPlatform}
			</h1>
			<div>{/* <SearchInput /> */}</div>
		</div>
	);
};

export default Header;
