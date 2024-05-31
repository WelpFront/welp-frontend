import { CustomMap } from "atoms";
import { Link } from "navigation";
import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { RiGlobalFill } from "react-icons/ri";
import { SiWhatsapp } from "react-icons/si";
import { SlLocationPin } from "react-icons/sl";

const BusinessLocation = ({
	lng,
	lat,
	name,
	whatsapp,
	phone,
	location,
	website,
	translation,
}: {
	lng: number;
	lat: number;
	name: string;
	whatsapp: number;
	phone: string;
	location: string;
	website: string;
	translation: any;
}) => {
	return (
		<div className="">
			<h3 className="text-xl my-1">{translation.locationAndContact}</h3>
			<div className="rounded-xl overflow-hidden border-1 border-solid border-gray-100 text-gray-500 ">
				<CustomMap lng={lng} lat={lat} name={name} />
				{location && (
					<>
						<hr />
						<div className="flex justify-start items-center py-3 gap-1 px-2">
							<SlLocationPin className="w-8 h-8" />
							{location}
						</div>
					</>
				)}
				{phone && (
					<>
						<hr />
						<div className="flex justify-start items-center py-3 gap-1 px-2">
							<FaPhoneVolume className="w-4 h-4" />
							{phone}
						</div>
					</>
				)}
				{whatsapp && (
					<>
						<hr />
						<div className="flex justify-start items-center py-3 gap-1 px-2">
							<SiWhatsapp className="w-4 h-4" />
							{whatsapp}
						</div>
					</>
				)}
				{website && (
					<>
						<hr />
						<div className="flex justify-start items-center py-3 gap-1 px-2">
							<RiGlobalFill className="w-5 h-5" />
							<Link
								href={website}
								target="_blank"
								className="underline">
								{translation.site}
							</Link>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default BusinessLocation;
