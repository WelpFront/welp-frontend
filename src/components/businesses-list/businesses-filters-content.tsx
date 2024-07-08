"use client";

import { CheckBox, RadioButton } from "atoms";
import React, { useEffect } from "react";
import { GiCancel } from "react-icons/gi";
import { useBusinessesFilterStore } from "store/businesses-filters";

const BusinessesFiltersContent = ({
	translation,
	setOpened,
}: {
	translation: any;
	setOpened?: (state: boolean) => void;
}) => {
	const setIsOpened = useBusinessesFilterStore((state) => state.setIsOpened);

	const isOpened = useBusinessesFilterStore((state) => state.isOpened);

	const categoriesToFilterWith = useBusinessesFilterStore(
		(state) => state.categoriesToFilterWith
	);

	const setIsDeliveryAvailable = useBusinessesFilterStore(
		(state) => state.setIsDeliveryAvailable
	);

	const isDeliveryAvailable = useBusinessesFilterStore(
		(state) => state.isDeliveryAvailable
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

	const priceCategory = useBusinessesFilterStore(
		(state) => state.priceCategory
	);

	const setCategory = useBusinessesFilterStore((state) => state.setCategory);

	const isLoading = useBusinessesFilterStore((state) => state.isLoading);

	const category = useBusinessesFilterStore((state) => state.category);

	const categories = useBusinessesFilterStore((state) => state.categories);

	const resetFiltersHandler = () => {
		setPriceCategory(null);
		setIsOpened(false);
		setIsDeliveryAvailable(false);
		setCategoriesToFilterWith([]);
		setCategory(null);
	};

	useEffect(() => {
		return () => resetFiltersHandler();
	}, []);

	return (
		<>
			<div className="flex flex-col items-start  gap-2">
				<div className="w-full flex justify-between items-center ">
					<h1 className="font-bold">{translation.filters}</h1>
					{(isOpened ||
						isDeliveryAvailable ||
						priceCategory ||
						categoriesToFilterWith.length > 0) &&
						!isLoading && (
							<GiCancel
								onClick={resetFiltersHandler}
								className="w-5 h-5 hover:text-red-500 cursor-pointer"
							/>
						)}
				</div>
				<hr className="my-2 h-[1px] bg-gray-100 w-full	" />
				<h1 className="font-bold">{translation.suggested}</h1>
				<CheckBox
					disabled={isLoading}
					checked={isOpened}
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
					checked={isDeliveryAvailable}
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
			<div className="flex flex-col items-start  gap-2">
				<h1 className="font-bold">{translation.price}</h1>
				<CheckBox
					checked={priceCategory === "$$$$"}
					onChange={(e) => {
						if (e.target.checked) {
							setPriceCategory("$$$$");
						} else {
							setPriceCategory(null);
						}
						setOpened && setOpened(false);
					}}
					disabled={isLoading}
					label={translation.expensive}
				/>
				<CheckBox
					checked={priceCategory === "$$$"}
					onChange={(e) => {
						if (e.target.checked) {
							setPriceCategory("$$$");
						} else {
							setPriceCategory(null);
						}
						setOpened && setOpened(false);
					}}
					disabled={isLoading}
					label={translation.high}
				/>
				<CheckBox
					checked={priceCategory === "$$"}
					onChange={(e) => {
						if (e.target.checked) {
							setPriceCategory("$$");
						} else {
							setPriceCategory(null);
						}
						setOpened && setOpened(false);
					}}
					disabled={isLoading}
					label={translation.medium}
				/>
				<CheckBox
					checked={priceCategory === "$"}
					onChange={(e) => {
						if (e.target.checked) {
							setPriceCategory("$");
						} else {
							setPriceCategory(null);
						}
						setOpened && setOpened(false);
					}}
					disabled={isLoading}
					label={translation.low}
				/>
			</div>
			{categories?.length > 0 && (
				<>
					<hr className="my-2 h-[1px] bg-gray-100	" />
					<h1 className="font-bold mb-3">{category?.name}</h1>
					<div className="flex flex-col items-start h-40  overflow-auto gap-2">
						{categories?.map((item) => (
							<CheckBox
								key={item.id}
								checked={
									!!categoriesToFilterWith?.find(
										(category) => category === item.id
									)
								}
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
