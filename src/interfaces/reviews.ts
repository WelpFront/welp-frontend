import { MediaType } from "./businesses";
import { UserType } from "./users";

export interface ReviewType {
	id: number;
	caption: string;
	rating: number;
	created_at: string;
	media: Array<MediaType>;
	reviewer: UserType;
}
