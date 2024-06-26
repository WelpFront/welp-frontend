"use client";

import { CategoryChildType, CategoryType } from "interfaces";
import { create } from "zustand";

interface BusinessesFilterState {
	category: CategoryType | null;
	categories: Array<CategoryChildType> | [];
	categoriesToFilterWith: Array<number> | [];
	priceCategory: string | null;
	searchKeyword: string | null;
	isOpened: boolean;
	isLoading: boolean;
	isDeliveryAvailable: boolean;
	city: string | null;
	setCategory: (category: CategoryType | null) => void;
	setChildrenCategories: (category: Array<CategoryChildType> | []) => void;
	setCategoriesToFilterWith: (categoriesToFilterWith: Array<number>) => void;
	setPriceCategory: (category: string | null) => void;
	setSearchKeyword: (keyword: string | null) => void;
	setIsOpened: (isOpened: boolean) => void;
	setIsLoading: (isLoading: boolean) => void;
	setIsDeliveryAvailable: (isDeliveryAvailable: boolean) => void;
	setCity: (city: string | null) => void;
}

export const useBusinessesFilterStore = create<BusinessesFilterState>(
	(set) => ({
		category: null,
		categories: [],
		categoriesToFilterWith: [],
		priceCategory: null,
		searchKeyword: null,
		isOpened: false,
		isLoading: false,
		isDeliveryAvailable: false,
		city: null,
		setCategory: (category: CategoryType | null) => set({ category }),
		setChildrenCategories: (categories: Array<CategoryChildType> | []) =>
			set({ categories }),
		setCategoriesToFilterWith: (categoriesToFilterWith: Array<number>) =>
			set({ categoriesToFilterWith }),
		setPriceCategory: (priceCategory: string | null) =>
			set({ priceCategory }),
		setSearchKeyword: (searchKeyword: string | null) =>
			set({ searchKeyword }),
		setIsOpened: (isOpened = false) => set({ isOpened }),
		setIsLoading: (isLoading = false) => set({ isLoading }),
		setIsDeliveryAvailable: (isDeliveryAvailable = false) =>
			set({ isDeliveryAvailable }),
		setCity: (city: string | null) => set({ city }),
	})
);
