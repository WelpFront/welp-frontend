"use client";

import { CategoriesCard } from "atoms";
import { CategoryType } from "interfaces";
import { useState } from "react";
import { useCategoriesStore } from "store/categories";

const CategoriesList = ({
	locale,
	translation,
}: {
	locale: string;
	translation: any;
}) => {
	const [opened, setOpened] = useState<number | null>(null);

	const categories = useCategoriesStore((state) => state.filteredCategories);

	const searchKeyword = useCategoriesStore((state) => state.searchKeyword);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  my-4 px-10 w-full">
			{categories.map((item: CategoryType) => (
				<CategoriesCard
					opened={opened}
					setOpened={setOpened}
					locale={locale}
					key={item.id}
					item={item}
				/>
			))}

			{categories?.length === 0 && searchKeyword && (
				<div className="col-span-3 flex items-center justify-center  h-32">
					{translation.noCategories}
				</div>
			)}
		</div>
	);
};

export default CategoriesList;
