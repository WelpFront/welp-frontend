"use client";

import { Icon, LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

interface CustomMapProps {
	lng: number;
	lat: number;
	name: string;
}

const CustomMap: React.FC<CustomMapProps> = ({ lng, lat, name }) => {
	const position: LatLngExpression = [lat, lng];

	const [domLoaded, setDomLoaded] = useState(false);

	useEffect(() => {
		setDomLoaded(true);
	}, []);

	if (!domLoaded) return null;
	return (
		<>
			{domLoaded && (
				<MapContainer
					className="w-full h-full"
					center={position}
					zoom={20}
					scrollWheelZoom={true}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker
						position={position}
						icon={
							new Icon({
								iconUrl: "/location.webp",
								iconSize: [25, 25],
								iconAnchor: [12, 41],
							})
						}>
						<Popup>{name}</Popup>
					</Marker>
				</MapContainer>
			)}
		</>
	);
};

export default CustomMap;
