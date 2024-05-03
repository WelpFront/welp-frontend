export interface OpeningHoursType {
	day: number;
	time_from: string;
	time_to: string;
	status: number;
}

export interface ProductTypesType {
	id: number;
	name: string;
}

export interface ProductType {
	description: string;
	id: number;
	image: string;
	name: string;
	price_after_discount: number;
	price_before_discount: number;
}
