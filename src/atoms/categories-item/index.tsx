import Image from "next/image";

const CategoriesItem = ({ text, icon }: { text: string; icon: string }) => {
	return (
		<div className="flex flex-col items-center justify-center text-center">
			<div className="rounded-full shrink-0 h-12 w-12 text-center break-words text-xs flex gap-2 items-center justify-center shadow-lg bg-white border border-solid p-2 border-gray-200">
				<Image src={icon} width={18} height={18} alt="category item" />
			</div>
			{text}
		</div>
	);
};

export default CategoriesItem;
