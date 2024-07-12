import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
	return (
		<div className="bg-gray-300 flex items-center justify-center h-screen">
			<ClipLoader size={60} />
		</div>
	);
};

export default Loader;
