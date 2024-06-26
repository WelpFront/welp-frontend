"use client";

import { CategoriesItem } from "atoms";
import { CategoryType } from "interfaces";
import { Link } from "navigation";
import { useBusinessesFilterStore } from "store/businesses-filters";

const Categories = ({
	categories,
	translation,
}: {
	categories: Array<CategoryType>;
	translation: any;
}) => {
	const filteredCategories = [
		categories?.[0],
		categories?.[1],
		categories?.[2],
		categories?.[5],
		categories?.[4],
	];

	const searchKeyword = useBusinessesFilterStore(
		(state) => state.searchKeyword
	);

	return (
		<div className="w-full flex justify-center">
			<div className="grid grid-cols-3 my-6 md:bg-orange-100 min-h-20 py-2  no-scrollbar w-3/4 md:w-1/2 rounded-full md:relative md:-top-16 md:flex items-center justify-around px-4 gap-4 md:overflow-auto ">
				{filteredCategories?.map((item: CategoryType) => (
					<Link
						key={item.id}
						href={
							searchKeyword
								? `/biz/businesses?category=${item.id}&search=${searchKeyword}`
								: `/biz/businesses?category=${item.id}`
						}>
						<CategoriesItem text={item.name} icon={item?.icon} />
					</Link>
				))}
				<Link href={"/categories"}>
					<CategoriesItem
						text={translation.more}
						icon={"/dots.png"}
					/>
				</Link>
			</div>
		</div>
	);
};

export default Categories;
