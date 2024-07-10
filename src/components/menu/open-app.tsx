import { Link } from "navigation";
import Image from "next/image";

const OpenApp = () => {
	return (
		<div className="bg-gray-50 flex  mx-3 rounded-lg justify-between mt-4 px-2 py-4 text-white">
			<Image src={"/logo.svg"} width={60} height={30} alt="logo" />

			<Link
				href={"YOUR_TEAM_ID.com.welp.welp://"}
				className="bg-secondary p-2 px-4 rounded-full ">
				فتح الأبليكيشن
			</Link>
		</div>
	);
};

export default OpenApp;
