import Image from "next/image";
import React from "react";

const CategoriesItem = ({ text, icon }: { text: string; icon: string }) => {
	return (
		<div className="rounded-full shrink-0 h-20 w-20 text-center break-words text-xs flex flex-col gap-2 items-center justify-center shadow-sm bg-white border border-solid p-2 border-gray-200">
			<Image src={icon} width={18} height={18} alt="category item" />
			{text}
		</div>
	);
};

export default CategoriesItem;
