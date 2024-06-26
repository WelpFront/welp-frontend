import Image from "next/image";

const CategoriesItem = ({ text, icon }: { text: string; icon: string }) => {
	return (
		<div className="flex flex-col items-center justify-center text-center hover:scale-95 duration-150 cursor-pointer">
			<div className="  mb-2 rounded-full shrink-0 h-12 w-12 text-center break-words text-xs flex gap-2 items-center justify-center shadow-lg bg-white border border-solid p-2 border-gray-200">
				<Image
					src={icon}
					width={18}
					height={18}
					className="w-8 h-8"
					alt="category item"
				/>
			</div>
			{text}
		</div>
	);
};

export default CategoriesItem;
