"use client";

import { ProductsList, CategoriesSlider } from "components";
import { useCategoriesList, useGetLastElement, useProductsList } from "hooks";
import { useRef, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Menu = ({ slug }: { slug: number }) => {
	const {
		active,
		data: categoriesData,
		loading: categoriesLoading,
		pathname,
		router,
		setActive,
		createQueryString,
	} = useCategoriesList(slug);

	const {
		data: productsData,
		hasMore,
		loading: productsLoading,
		pagesLoading,
		setPage,
	} = useProductsList(categoriesLoading);

	const { lastElement } = useGetLastElement(pagesLoading, hasMore, () =>
		setPage((prev) => prev + 1)
	);

	const sliderRef = useRef<HTMLDivElement>(null);
	const [isOverflowed, setIsOverflowed] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (sliderRef.current) {
				const { scrollWidth, clientWidth } = sliderRef.current;
				setIsOverflowed(scrollWidth > clientWidth);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [categoriesData]);

	const scrollLeft = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
		}
	};

	const scrollRight = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
		}
	};

	console.log(isOverflowed);

	return (
		<div className="bg-gray-50 relative px-3 md:px-10 py-3">
			{isOverflowed && (
				<button
					className="bg-white hidden md:flex items-center justify-center py-3 px-2 absolute right-0 top-5"
					onClick={scrollRight}>
					<IoIosArrowForward />
				</button>
			)}
			<CategoriesSlider
				sliderRef={sliderRef}
				setActive={setActive}
				data={categoriesData}
				loading={categoriesLoading}
				active={active}
				createQueryString={createQueryString}
				pathname={pathname}
				productsLoading={productsLoading}
				router={router}
			/>
			{isOverflowed && (
				<button
					className="bg-white hidden md:flex items-center justify-center py-3 px-2 absolute left-0 top-5"
					onClick={scrollLeft}>
					<IoIosArrowBack />
				</button>
			)}
			<ProductsList
				data={productsData}
				pagesLoading={pagesLoading}
				loading={productsLoading}
				lastElement={lastElement}
			/>
		</div>
	);
};

export default Menu;
