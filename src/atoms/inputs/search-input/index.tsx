import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({
	translation,
	className,
}: {
	translation: any;
	className?: string;
}) => {
	return (
		<div
			className={`rounded-full h-10 md:h-12 w-full md:w-3/4  relative  justify-start shadow-md  bg-white flex text-gray-600 gap-1  items-center overflow-hidden ${className} `}>
			<div className="flex items-center w-full h-full gap-2 border-l-2 border-solid ps-3 border-gray-200 ">
				<FaSearch className="text-gray-400" />

				<input
					type="text"
					placeholder={translation.ex}
					className="text-gray-800  text-xs md:text-sm  h-full w-full   outline-none"
				/>
			</div>
			<div className="flex items-center h-full gap-2 justify-start">
				<Image
					width={20}
					height={20}
					src={"/navigation.svg"}
					alt="navigation"
				/>

				<input
					type="text"
					placeholder={translation.where}
					className="text-gray-800 text-xs md:text-sm  h-full w-1/3 md:w-full  outline-none"
				/>
			</div>
			<div className=" items-center h-full gap-2 flex shrink-0">
				<button className="bg-secondary text-white  h-full py-1 px-5 flex-1 start-0 relative">
					<FaSearch className="text-white" />
				</button>
			</div>
		</div>
	);
};

export default SearchInput;
