import { MenuSectorCard } from "atoms";
import { ProductType } from "interfaces";
import { Link } from "navigation";

const MenuSector = ({
	products,
	translation,
	slug,
}: {
	products: Array<ProductType>;
	translation: any;
	slug: any;
}) => {
	return (
		<div>
			<h3 className="text-xl">{translation.menu}</h3>
			<div className=" p-3 w-full rounded-xl overflow-hidden border-1 border-solid border-gray-100">
				<div className="grid grid-cols-3 gap-3">
					{products.map((item) => (
						<MenuSectorCard key={item.id} item={item} />
					))}
				</div>
				<hr className="mt-3" />
				<Link
					href={`/biz/businesses/${slug}/menu`}
					className="text-yellow-500 font-bold text-lg my-2">
					{translation.seeAll}
				</Link>
			</div>
		</div>
	);
};

export default MenuSector;
