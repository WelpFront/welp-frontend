import { getCookie } from "cookies-next";
import { FaMapMarkerAlt } from "react-icons/fa";

const TextInputWithIcon = ({
	label,
	name,
	field,
}: {
	label: string;
	name: string;
	field: any;
}) => {
	const locale = getCookie("NEXT_LOCALE");

	return (
		<div
			className={`relative w-full max-w-sm mx-auto ${
				locale === "ar" ? "rtl" : "ltr"
			}`}>
			<label
				htmlFor="address"
				className="block text-sm font-medium text-gray-700">
				Address
			</label>
			<div className="mt-1 relative rounded-full shadow-sm">
				<div
					className={`absolute inset-y-0 ${
						locale === "ar" ? "right-0 pr-3" : "left-0 pl-3"
					} flex items-center pointer-events-none border-s ps-1 my-auto h-3/4 border-gray-300`}>
					<FaMapMarkerAlt className="text-gray-400" />
				</div>
				<input
					type="text"
					id="address"
					className={`block w-full ${
						locale === "ar"
							? "pr-10 pl-3 text-right"
							: "pr-3 pl-10 text-left"
					} py-2 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
					placeholder="Address"
				/>
			</div>
		</div>
	);
};

export default TextInputWithIcon;
