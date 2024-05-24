import Image from "next/image";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const BusinessReviews = () => {
	return (
		<div className="my-10">
			<h3 className="text-xl">Reviews</h3>

			<div className="flex flex-col  border-1 border-solid border-gray-100 p-3 rounded-xl">
				<div className="flex items-start gap-5 text-gray-400" dir="ltr">
					<div>
						<Image
							src={"/default-user.jpg"}
							width={120}
							height={120}
							alt="user"
							className="rounded-full w-28 h-28 flex-1"
						/>
					</div>
					<div className="flex flex-col gap-5 items-start justify-center flex-1">
						<div className="flex flex-col gap-2">
							<h1 className="font-bold">Ahmed Mohamed</h1>
							<h4 className="text-sm">May 1 ,2024 9:50 pm</h4>
						</div>

						<div className="flex text-justify">
							The point of using Lorem Ipsum is that it has a
							more-or-less normal The point of using Lorem Ipsum
							is that it has a more-or-less normal The point of
							using Lorem Ipsum is that it has a more-or-less
							normal The point of using Lorem Ipsum is that it has
							a more-or-less normal
						</div>
					</div>

					<div className="flex items-center flex-wrap gap-2 px-3 py-1 select-none">
						<div className="flex">
							<IoIosStar className="text-yellow-500" />
							<IoIosStar className="text-yellow-500" />
							<IoIosStar className="text-yellow-500" />
							<IoIosStarHalf className="text-yellow-500" />
							<IoIosStarOutline />
						</div>
						<div className="rounded-full w-10 h-5 bg-yellow-400 text-white flex items-center justify-center">
							3.2
						</div>
					</div>
				</div>
				<hr className="w-full h-2 my-2" />
				<div
					className="flex items-start gap-5 text-gray-400 "
					dir="ltr">
					<div>
						<Image
							src={"/default-user.jpg"}
							width={120}
							height={120}
							alt="user"
							className="rounded-full w-28 h-28 flex-1"
						/>
					</div>
					<div className="flex flex-col gap-5 items-start justify-center flex-1">
						<div className="flex flex-col gap-2">
							<h1 className="font-bold">Ahmed Mohamed</h1>
							<h4 className="text-sm">May 1 ,2024 9:50 pm</h4>
						</div>

						<div className="flex text-justify">
							The point of using Lorem Ipsum is that it has a
							more-or-less normal The point of using Lorem Ipsum
							is that it has a more-or-less normal The point of
							using Lorem Ipsum is that it has a more-or-less
							normal The point of using Lorem Ipsum is that it has
							a more-or-less normal
						</div>
					</div>

					<div className="flex items-center flex-wrap gap-2 px-3 py-1 select-none">
						<div className="flex">
							<IoIosStar className="text-yellow-500" />
							<IoIosStar className="text-yellow-500" />
							<IoIosStar className="text-yellow-500" />
							<IoIosStarHalf className="text-yellow-500" />
							<IoIosStarOutline />
						</div>
						<div className="rounded-full w-10 h-5 bg-yellow-400 text-white flex items-center justify-center">
							3.2
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BusinessReviews;
