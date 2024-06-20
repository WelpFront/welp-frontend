"use client";

import { BusinessCard, BusinessesListLoader, CustomPagination } from "atoms";
import { useBusinessesList } from "hooks";
import { Link } from "navigation";
import React, { useMemo } from "react";

const BusinessesList = ({
	locale,
	translation,
}: {
	locale: string;
	translation: any;
}) => {
	const { businesses, page, setPage, count, loading } = useBusinessesList();

	const loaders = useMemo(() => {
		const loaders = [];
		for (let i = 0; i < 9; i++) {
			loaders.push(<BusinessesListLoader key={i} />); // Add ProductsLoader component to the array
		}
		return loaders;
	}, []);

	const pagesCount = Math.ceil(count / 10);

	const handleNextAction = () => {
		if (page < pagesCount) {
			setPage((prev) => prev + 1);
		}
	};

	const handlePrevAction = () => {
		if (page > 0) {
			setPage((prev) => prev - 1);
		}
	};

	return (
		<div className="col-span-4 lg:col-span-3 bg-gray-businesses shadow-md w-full min-h-screen rounded-3xl p-3 ">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
				{loading && loaders}
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
				{!loading &&
					businesses.map((item) => (
						<Link href={`/biz/businesses/${item.id}`} key={item.id}>
							<BusinessCard item={item} locale={locale} />
						</Link>
					))}
			</div>

			{!loading && businesses?.length === 0 && (
				<div className="h-full w-full flex items-center justify-center text-xl">
					{translation.noResults}
				</div>
			)}

			{loading ? (
				<div className=" bg-gray-200 rounded-md col-span-3  w-full  h-10 animate-pulse"></div>
			) : (
				<div
					dir="ltr"
					className="w-full flex items-center float-left select-none col-span-3 bottom-0">
					{pagesCount > 1 && (
						<CustomPagination
							setPage={setPage}
							page={page}
							pagesCount={pagesCount}
							paginationNextAction={handleNextAction}
							paginationPrevAction={handlePrevAction}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default BusinessesList;
