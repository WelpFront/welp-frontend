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
		const ellipsis = (
			<span key="ellipsis" className="text-sm md:text-xl font-bold">
				...
			</span>
		);

		if (pagesCount <= 7) {
			for (let i = 1; i <= pagesCount; i++) {
				items.push(
					<div className="cursor-pointer" key={i}>
						<button
							className={`${
								i === page ? "text-black" : "text-gray-400"
							} bg-transparent border-none text-sm md:text-xl font-bold mx-1`}
							onClick={() => setPage(i)}>
							{i}
						</button>
					</div>
				);
			}
		} else {
			for (let i = 1; i <= 3; i++) {
				items.push(
					<div className="cursor-pointer" key={i}>
						<button
							className={`${
								i === page ? "text-black" : "text-gray-400"
							} bg-transparent border-none text-sm md:text-xl font-bold mx-1`}
							onClick={() => setPage(i)}>
							{i}
						</button>
					</div>
				);
			}
			items.push(ellipsis);

			if (page > 3 && page < pagesCount - 2) {
				for (let i = page - 1; i <= page + 1; i++) {
					items.push(
						<div className="cursor-pointer" key={i}>
							<button
								className={`${
									i === page ? "text-black" : "text-gray-400"
								} bg-transparent border-none text-sm md:text-xl font-bold mx-1`}
								onClick={() => setPage(i)}>
								{i}
							</button>
						</div>
					);
				}
				items.push(ellipsis);
			}

			for (let i = pagesCount - 2; i <= pagesCount; i++) {
				items.push(
					<div className="cursor-pointer" key={i}>
						<button
							className={`${
								i === page ? "text-black" : "text-gray-400"
							} bg-transparent border-none text-sm md:text-xl font-bold mx-1`}
							onClick={() => setPage(i)}>
							{i}
						</button>
					</div>
				);
			}
		}
		return items;
	};

	return (
		<div
			dir="ltr"
			className="flex items-center justify-start gap-1 my-2 border-t-1 overflow-auto border-gray-100  border-solid py-2">
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
