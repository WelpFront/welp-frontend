"use client";

import { CategoryType } from "interfaces";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useCategoriesStore } from "store/categories";

const CategoriesSearchInput = ({
	fetchedCategories,
	translation,
}: {
	fetchedCategories: any;
	translation: any;
}) => {
	const {
		setFilteredCategories,
		setCategories,
		categories,
		setSearchKeyword,
	} = useCategoriesStore((state) => state);

	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		setFilteredCategories(fetchedCategories);
		setCategories(fetchedCategories);
	}, []);

	const filterCategories = (keyword: string) => {
		setInputValue(keyword);
		if (keyword.length >= 1) {
			setSearchKeyword(keyword);
			setFilteredCategories(
				categories.filter((item) => item.name.includes(keyword))
			);
		} else {
			setFilteredCategories(categories);
			setSearchKeyword(null);
		}
	};

	const handleSuggestionClick = (suggestion: string) => {
		setInputValue(suggestion);
		setFilteredCategories(
			categories.filter((item) => item.name.includes(suggestion))
		);
		setSearchKeyword(suggestion);
	};

	return (
		<div className="border border-solid ps-3 border-gray-200 h-auto w-full md:w-2/3 shadow-md rounded-3xl">
			<div className="flex items-center w-full h-full gap-2 p-3">
				<FaSearch className="text-gray-400" />
				<input
					value={inputValue}
					onChange={(e) => filterCategories(e.target.value)}
					type="text"
					placeholder={translation.search}
					className="text-gray-800 text-xs md:text-sm h-full w-full outline-none"
				/>
			</div>
			<div className="suggestions">
				{categories
					.filter(
						(item) => item.name.includes(inputValue) && inputValue
					)
					.map((suggestion) => (
						<div
							key={suggestion.id}
							onClick={() =>
								handleSuggestionClick(suggestion.name)
							}
							className="suggestion-item">
							{suggestion.name}
						</div>
					))}
			</div>
		</div>
	);
};

export default CategoriesSearchInput;
