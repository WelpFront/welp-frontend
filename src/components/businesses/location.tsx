import { CustomMap } from "atoms";
import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { SlLocationPin } from "react-icons/sl";

const BusinessLocation = ({
	lng,
	lat,
	name,
}: {
	lng: number;
	lat: number;
	name: string;
}) => {
	return (
		<div className="">
			<h3 className="text-xl">Location & Contact Info</h3>
			<div className="rounded-xl overflow-hidden border-1 border-solid border-gray-100 text-gray-500 ">
				<CustomMap lng={lng} lat={lat} name={name} />
				<hr />
				<div className="flex justify-start items-center py-3 gap-1 px-2">
					<SlLocationPin />
					location
				</div>
				<hr />
				<div className="flex justify-start items-center py-3 gap-1 px-2">
					<FaPhoneVolume />
					phone_number
				</div>
				<hr />
				<div className="flex justify-start items-center py-3 gap-1 px-2">
					<SiWhatsapp />
					whatsapp
				</div>
				<hr />
				<div className="flex justify-start items-center py-3 gap-1 px-2">
					<SlLocationPin />
					location
				</div>
			</div>
		</div>
	);
};

export default BusinessLocation;
