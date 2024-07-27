"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

const CustomMapInput = ({ setLng, setLat }: { setLng: any; setLat: any }) => {
	const [currentCenter, setCurrentCenter] = useState({
		lat: 26.8206,
		lng: 30.8025,
	});

	const containerStyle = {
		width: "100%",
		height: "100%",
	};

	const handleMapClick = (e: any) => {
		console.log(e);
	};

	return (
		<LoadScript
			googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY as string}>
			<GoogleMap
				onClick={(e) => handleMapClick(e)}
				mapContainerStyle={containerStyle}
				center={currentCenter}
				zoom={5}>
				<Marker position={currentCenter} />
			</GoogleMap>
		</LoadScript>
	);
};

export default CustomMapInput;
