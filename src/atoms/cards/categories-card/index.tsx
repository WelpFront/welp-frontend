import { CategoryType } from "interfaces";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";

const CategoriesCard = ({
	item,
	locale,
}: {
	item: CategoryType;
	locale: string;
}) => {
	return (
		<div className="cursor-pointer hover:scale-95 duration-150 rounded-3xl flex py-3 px-3 justify-between items-center border border-solid border-gray-200 bg-categories-gray shadow-sm text-black">
			<div className="flex items-center gap-2">
				<Image src={item.icon} width={50} height={50} alt={item.name} />

				<h2>{item.name}</h2>
			</div>
			<div>
				<FaChevronRight
					className={`w-4 h-4 ${locale === "ar" && "rotate-180"}`}
				/>
			</div>
		</div>
	);
};

export default CategoriesCard;
