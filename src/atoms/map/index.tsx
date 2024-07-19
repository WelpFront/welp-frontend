"use client";

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

const CustomMap = ({
	lng,
	lat,
	name,
}: {
	lng: number;
	lat: number;
	name: string;
}) => {
	const mapRef = useRef<HTMLDivElement>(null);

	const initMap = async () => {
		const loader = new Loader({
			apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
		});

		const { Map } = await loader.importLibrary("maps");

		const { DirectionsService } = await loader.importLibrary("routes");

		const { Marker } = (await loader.importLibrary(
			"marker"
		)) as google.maps.MarkerLibrary;

		const position = {
			lat,
			lng,
		};

		const mapOptions: google.maps.MapOptions = {
			center: position,
			zoom: 17,
			mapId: name,
		};
		const directions = new DirectionsService();
		console.log(directions.route);

		const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

		const makrer = new Marker({
			map,
			position,
		});
	};
	useEffect(() => {
		initMap();
	}, []);
	return <div className="w-full h-full" ref={mapRef} />;
};

export default CustomMap;
