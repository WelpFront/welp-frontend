import { CategoriesItem } from "atoms";
import { CategoryChildType, CategoryType } from "interfaces";

const Categories = ({ categories }: { categories: Array<CategoryType> }) => {
	const filteredCategories = [
		categories[0],
		categories[1],
		categories[3],
		categories[7],
		categories[8],
		categories[9],
	];

	return (
		<div className="w-full flex justify-center">
			<div className="bg-orange-100 min-h-28  no-scrollbar w-3/4 md:w-1/2 rounded-full relative -top-12 flex items-center justify-start px-3 gap-2 overflow-auto ">
				{filteredCategories.map(
					({ children }: { children: Array<CategoryChildType> }) => (
						<CategoriesItem
							key={children[0].id}
							text={children[0].name}
							icon={children[0]?.icon}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default Categories;
