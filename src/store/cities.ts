"use client";

import { CityType } from "interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CitiesState {
	cities: Array<CityType>;
	setCities: (data: Array<CityType>) => void;
}

export const useCitiesStore = create(
	persist<CitiesState>(
		(set) => ({
			cities: [],
			setCities: (citiesList: Array<CityType>) =>
				set({ cities: citiesList }),
		}),
		{
			name: "cities",
		}
	)
);
