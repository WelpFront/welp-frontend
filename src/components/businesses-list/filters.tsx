"use client";

import { CheckBox, RadioButton } from "atoms";
import { useGetCategory } from "hooks";
import { useSearchParams } from "next/navigation";
import { useBusinessesFilterStore } from "store/businesses-filters";

const BusinessesFilters = ({ translation }: { translation: any }) => {
	const setIsOpened = useBusinessesFilterStore((state) => state.setIsOpened);

	const params = useSearchParams();

	const id = params.get("category");

	useGetCategory(id as string);

	const categoriesToFilterWith = useBusinessesFilterStore(
		(state) => state.categoriesToFilterWith
	);

	const setIsDeliveryAvailable = useBusinessesFilterStore(
		(state) => state.setIsDeliveryAvailable
	);

	const setCategoriesToFilterWith = useBusinessesFilterStore(
		(state) => state.setCategoriesToFilterWith
	);

	const setPriceCategory = useBusinessesFilterStore(
		(state) => state.setPriceCategory
	);

	const isLoading = useBusinessesFilterStore((state) => state.isLoading);

	const category = useBusinessesFilterStore((state) => state.category);

	const categories = useBusinessesFilterStore((state) => state.categories);

	return (
		<div className="col-span-1 hidden lg:block bg-gray-businesses shadow-md w-full h-screen rounded-3xl p-3 sticky top-0">
			<h1 className="font-bold">{translation.filters}</h1>
			<hr className="my-2 h-[1px] bg-gray-100	" />
			<div className="flex flex-col items-start  gap-3">
				<h1 className="font-bold">{translation.suggested}</h1>
				<CheckBox
					disabled={isLoading}
					onChange={(e) => {
						if (e.target.checked) {
							setIsOpened(true);
						} else {
							setIsOpened(false);
						}
					}}
					label={translation.isOpened}
				/>
				<CheckBox
					onChange={(e) => {
						if (e.target.checked) {
							setIsDeliveryAvailable(true);
						} else {
							setIsDeliveryAvailable(false);
						}
					}}
					disabled={isLoading}
					label={translation.offersDelivery}
				/>
			</div>
			<hr className="my-2 h-[2px] bg-gray-100	" />
			<div className="flex flex-col items-start  gap-3">
				<h1 className="font-bold">{translation.price}</h1>
				<RadioButton
					onChange={(e) => setPriceCategory("$$$$")}
					disabled={isLoading}
					label={translation.expensive}
				/>
				<RadioButton
					onChange={(e) => setPriceCategory("$$$")}
					disabled={isLoading}
					label={translation.high}
				/>
				<RadioButton
					onChange={(e) => setPriceCategory("$$")}
					disabled={isLoading}
					label={translation.medium}
				/>
				<RadioButton
					onChange={(e) => setPriceCategory("$")}
					disabled={isLoading}
					label={translation.low}
				/>
			</div>
			{categories?.length > 0 && (
				<>
					<hr className="my-2 h-[1px] bg-gray-100	" />
					<h1 className="font-bold mb-3">{category?.name}</h1>
					<div className="flex flex-col items-start h-56  overflow-auto gap-3">
						{categories?.map((item) => (
							<CheckBox
								key={item.id}
								onChange={(e) => {
									if (e.target.checked) {
										setCategoriesToFilterWith([
											...categoriesToFilterWith,
											item.id,
										]);
									} else {
										setCategoriesToFilterWith([
											...categoriesToFilterWith.filter(
												(category) =>
													category !== item.id
											),
										]);
									}
								}}
								disabled={isLoading}
								label={item.name}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default BusinessesFilters;
