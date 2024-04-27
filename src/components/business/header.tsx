import { Chip } from "atoms";
import Image from "next/image";

const BusinessHeader = () => {
	return (
		<div className="flex gap-2 bg-gray-100 p-3 my-4">
			<Image
				className="rounded-md object-cover"
				src={"/zacks.png"}
				height={100}
				width={150}
				alt="business"
			/>
			<div className="w-full flex-1 flex flex-col gap-4">
				<div className="flex justify-between ">
					<h1 className="text-black font-extrabold">زاكس</h1>

					<Chip
						text={"4.8"}
						icon="/star.png"
						background="bg-secondary"
					/>
				</div>
				<div>
					<p className="text-gray-600 text-sm">
						يقدم زاكس مجموعه كبيره من السندوتشات الرائعه و فرايد
						تشيكن . وهو منتج مصري ١٠٠ ٪
					</p>
				</div>

				<div className="flex flex-wrap gap-1">
					<Chip text="test" />
					<Chip text="test" />
					<Chip text="test" />
					<Chip text="test" />
					<Chip text="test" />
				</div>

				<div className="flex  gap-1 text-sm">
					<p className="text-success">مفتوح الأن</p>

					<p className="text-black"> يغلق عند الساعة 12ص</p>
				</div>

				<div></div>
			</div>
		</div>
	);
};

export default BusinessHeader;
