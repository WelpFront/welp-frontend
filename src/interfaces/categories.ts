export interface CategoryChildType {
	id: number;
	name: string;
	icon: string;
}

export interface CategoryType {
	id: number;
	name: string;
	icon: string;
	children: Array<CategoryChildType>;
}
