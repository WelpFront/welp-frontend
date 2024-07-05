import { UserType } from "./users";

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

export interface ReviewsStats {
	rating_1_count: number;
	rating_2_count: number;
	rating_3_count: number;
	rating_4_count: number;
	rating_5_count: number;
	reviews_count: number;
	rating_score: number;
}

export interface BusinessType {
	description: string;
	slug: string;
	whatsapp: string;
	phone_number: string;
	website: string;
	id: number;
	cover_image: string;
	name: string;
	price_category: string;
	location_name: null | string;
	governorate_name: string;
	city_name: string;
	city: number;
	street: string;
	longitude: number;
	latitude: number;
	distance: number;
	is_verified: boolean;
	is_reviews_allowed: boolean;
	is_opened: boolean;
	is_opened_all_days: boolean;
	is_permanently_closed: boolean;
	is_bookmarked: boolean;
	share_link: string;
	menu_share_link: string;
	media: Array<{}>;
	categories: Array<{}>;
	reviews_stats?: ReviewsStats;
}

export interface MediaType {
	id: number;
	file: string;
	uploaded_by: UserType | null;
}

export interface FacilitiesType {
	id: number;
	name: string;
	type: number;
}
