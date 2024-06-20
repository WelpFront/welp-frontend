"use client";

import { CategoryType } from "interfaces";
import { create } from "zustand";

interface CategoriesState {
	searchKeyword: string | null;
	categories: Array<CategoryType>;
	filteredCategories: Array<CategoryType>;
	setFilteredCategories: (data: Array<CategoryType>) => void;
	setCategories: (data: Array<CategoryType>) => void;
	setSearchKeyword: (data: string | null) => void;
}

export const useCategoriesStore = create<CategoriesState>((set) => ({
	searchKeyword: null,
	categories: [],
	filteredCategories: [],
	setFilteredCategories: (categoriesList: Array<CategoryType>) =>
		set({ filteredCategories: categoriesList }),
	setCategories: (categoriesList: Array<CategoryType>) =>
		set({ categories: categoriesList }),
	setSearchKeyword: (keyword: string | null) =>
		set({ searchKeyword: keyword }),
}));
