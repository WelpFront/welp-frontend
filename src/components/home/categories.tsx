import { CategoriesItem } from "atoms";
import { CategoryChildType, CategoryType } from "interfaces";

const Categories = ({
	categories,
	translation,
}: {
	categories: Array<CategoryType>;
	translation: any;
}) => {
	const filteredCategories = [
		categories[0],
		categories[1],
		categories[2],
		categories[3],
		categories[4],
	];

	return (
		<div className="w-full flex justify-center">
			<div className="grid grid-cols-3 my-3 md:bg-orange-100 min-h-28  no-scrollbar w-3/4 md:w-1/2 rounded-full md:relative md:-top-16 md:flex items-center justify-around px-4 gap-4 md:overflow-auto ">
				{filteredCategories.map(
					({ children }: { children: Array<CategoryChildType> }) => (
						<CategoriesItem
							key={children[0].id}
							text={children[0].name}
							icon={children[0]?.icon}
						/>
					)
				)}
				<CategoriesItem text={translation.more} icon={"/dots.png"} />
			</div>
		</div>
	);
};

export default Categories;
