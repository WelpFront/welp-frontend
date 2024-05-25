import React from "react";

const ProgressBar = ({ percentage }: { percentage: number }) => {
	const color = () => {
		switch (true) {
			case percentage < 40:
				return "bg-red-500";
			case percentage < 100:
				return "bg-orange-600";

			default:
				return "bg-yellow-500";
		}
	};
	return (
		<div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-200">
			<div
				className={`${color()} h-2 rounded-full `}
				style={{ width: `${percentage}%` }}></div>
		</div>
	);
};

export default ProgressBar;
