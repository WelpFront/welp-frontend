import { FaRegClock } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5";

const BusinessOpen = ({
	isOpened,
	translation,
}: {
	isOpened: boolean;
	translation: any;
}) => {
	return (
		<div className="rounded-xl overflow-hidden border-1 border-solid border-gray-100 my-7 p-3">
			{isOpened ? (
				<div className="flex items-center text-green-500 font-semibold gap-1">
					<div className="bg-green-500 text-white rounded-md p-1">
						<FaRegClock />
					</div>
					{translation.isOpened}
				</div>
			) : (
				<div className="flex items-center text-red-500 font-semibold gap-1">
					<div className="bg-red-500 text-white rounded-md p-1">
						<IoLockClosed />
					</div>
					{translation.isClosed}
				</div>
			)}
		</div>
	);
};

export default BusinessOpen;
