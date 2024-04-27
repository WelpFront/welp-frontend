import Image from "next/image";

const OpenApp = () => {
	return (
		<div className="bg-gray-200 flex  mx-3 rounded-lg justify-between mt-4 px-2 py-4 text-white">
			<Image src={"/logo.png"} width={60} height={30} alt="logo" />

			<button className="bg-secondary p-2 px-4 rounded-full ">
				{" "}
				فتح الأبليكيشن
			</button>
		</div>
	);
};

export default OpenApp;
