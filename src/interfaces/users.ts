export interface UserType {
	id: number;
	name: string;
	username: string;
	is_verified: boolean;
	is_follower: boolean;
	is_following: boolean;
	avatar: string | null;
}
