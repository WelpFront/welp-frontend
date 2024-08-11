"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { env } from "next-runtime-env";

const CustomMap = ({
	lng,
	lat,
	name,
}: {
	lng: number;
	lat: number;
	name: string;
}) => {
	const center = {
		lat,
		lng,
	};

	const containerStyle = {
		width: "100%",
		height: "100%",
	};

	return (
		<LoadScript
			googleMapsApiKey={env("NEXT_PUBLIC_MAPS_API_KEY") as string}>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={18}>
				<Marker position={center} />
			</GoogleMap>
		</LoadScript>
	);
};

export default CustomMap;
