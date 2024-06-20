"use client";

import { CheckBox, RadioButton } from "atoms";
import React, { useEffect } from "react";
import { useBusinessesFilterStore } from "store/businesses-filters";

const BusinessesFiltersContent = ({
	translation,
	setOpened,
}: {
	translation: any;
	setOpened?: (state: boolean) => void;
}) => {
	const setIsOpened = useBusinessesFilterStore((state) => state.setIsOpened);

	const categoriesToFilterWith = useBusinessesFilterStore(
		(state) => state.categoriesToFilterWith
	);

	const setIsDeliveryAvailable = useBusinessesFilterStore(
		(state) => state.setIsDeliveryAvailable
	);

	const setCategoriesToFilterWith = useBusinessesFilterStore(
		(state) => state.setCategoriesToFilterWith
	);

	const setChildrenCategories = useBusinessesFilterStore(
		(state) => state.setChildrenCategories
	);

	const setPriceCategory = useBusinessesFilterStore(
		(state) => state.setPriceCategory
	);

	const setCategory = useBusinessesFilterStore((state) => state.setCategory);

	const isLoading = useBusinessesFilterStore((state) => state.isLoading);

	const category = useBusinessesFilterStore((state) => state.category);

	const categories = useBusinessesFilterStore((state) => state.categories);

	const resetFiltersHandler = () => {
		setPriceCategory(null);
		setCategoriesToFilterWith([]);
		setIsOpened(false);
		setIsDeliveryAvailable(false);
		setChildrenCategories([]);
		setCategory(null);
	};

	useEffect(() => {
		return () => resetFiltersHandler();
	}, []);

	return (
		<>
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
						setOpened && setOpened(false);
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
						setOpened && setOpened(false);
					}}
					disabled={isLoading}
					label={translation.offersDelivery}
				/>
			</div>
			<hr className="my-2 h-[2px] bg-gray-100	" />
			<div className="flex flex-col items-start  gap-3">
				<h1 className="font-bold">{translation.price}</h1>
				<RadioButton
					onChange={(e) => {
						setOpened && setOpened(false);
						setPriceCategory("$$$$");
					}}
					disabled={isLoading}
					label={translation.expensive}
				/>
				<RadioButton
					onChange={(e) => {
						setOpened && setOpened(false);
						setPriceCategory("$$$");
					}}
					disabled={isLoading}
					label={translation.high}
				/>
				<RadioButton
					onChange={(e) => {
						setOpened && setOpened(false);
						setPriceCategory("$$");
					}}
					disabled={isLoading}
					label={translation.medium}
				/>
				<RadioButton
					onChange={(e) => {
						setOpened && setOpened(false);
						setPriceCategory("$");
					}}
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
									setOpened && setOpened(false);

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
		</>
	);
};

export default BusinessesFiltersContent;
