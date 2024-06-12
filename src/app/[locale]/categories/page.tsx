import { CategoriesCard } from "atoms";
import { CategoryType } from "interfaces";
import { getCategoriesList } from "services";

const Categories = async ({ params }: { params: any }) => {
	const categories = await getCategoriesList(true);

	return (
		<div className="my-10 flex flex-col justify-center ">
			<h1 className="text-5xl font-semibold text-center">
				All Categories
			</h1>

			<div></div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10 my-4">
				{categories.map((item: CategoryType) => (
					<CategoriesCard
						locale={params.locale}
						key={item.id}
						item={item}
					/>
				))}
			</div>
		</div>
	);
};

export default Categories;
