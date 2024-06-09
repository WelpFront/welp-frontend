"use client";

import { Link } from "navigation";
import dynamic from "next/dynamic";
import React, { useMemo } from "react";
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
	const CustomMap = useMemo(
		() =>
			dynamic(() => import("atoms/map"), {
				loading: () => <p>A map is loading</p>,
				ssr: false,
			}),
		[]
	);
	return (
		<div>
			<h3 className="text-xl my-1">{translation.locationAndContact}</h3>
			<div className="rounded-3xl overflow-hidden border-1 border-solid border-gray-100 text-gray-500 ">
				<div className="w-full h-[40vh]">
					<CustomMap lng={lng} lat={lat} name={name} />
				</div>
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
