import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

const CustomPagination = ({
	paginationPrevAction,
	paginationNextAction,
	pagesCount,
	page,
	setPage,
}: Readonly<{
	paginationPrevAction: () => void;
	paginationNextAction: () => void;
	setPage: Function;
	pagesCount: number;
	page: number;
}>) => {
	const renderPaginationItems = () => {
		const items = [];
		for (let i = 1; i <= pagesCount; i++) {
			items.push(
				<div className="cursor-pointer" key={i}>
					<button
						className={`${
							i === page ? "text-black " : "text-gray-400"
						} bg-transparent border-none  text-xl font-bold`}
						onClick={() => setPage(i)}>
						{i}
					</button>
				</div>
			);
		}
		return items;
	};
	return (
		<div
			dir="ltr"
			className="flex items-center justify-start gap-1 my-2 border-t-1 border-gray-100  border-solid py-2">
			<FaChevronCircleLeft
				onClick={paginationPrevAction}
				className={` w-5 h-5  ${
					page === 1
						? "opacity-60  cursor-not-allowed"
						: "cursor-pointer"
				}`}
			/>

			{renderPaginationItems()}

			<FaChevronCircleRight
				onClick={paginationNextAction}
				className={` w-5 h-5   ${
					page === pagesCount
						? "opacity-60  cursor-not-allowed"
						: "cursor-pointer"
				}`}
			/>
		</div>
	);
};

export default CustomPagination;
