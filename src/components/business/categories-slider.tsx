"use client";

import { Chip, TagsLoader } from "atoms";
import { ProductTypesType } from "interfaces";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { getBusinessProductTypes } from "services";

const CategoriesSlider = ({ slug }: { slug: number }) => {
	const [loading, setLoading] = useState(true);

	const [active, setActive] = useState<number | null>(null);

	const [data, setData] = useState<Array<ProductTypesType>>([]);

	const router = useRouter();

	const pathname = usePathname();

	const searchParams = useSearchParams();

	const createQueryString = useCallback(
		(name: string, value: any) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);

	const chipClickHandler = (id: number) => {
		setActive(id);
		router.push(pathname + "?" + createQueryString("type", id));
	};

	useEffect(() => {
		if (slug) {
			setLoading(true);
			getBusinessProductTypes(slug)
				.then((res) => {
					setData(res);

					if (res.length > 0) {
						setActive(res[0]?.id);
						router.push(
							pathname +
								"?" +
								createQueryString("type", res[0]?.id)
						);
					}
				})
				.finally(() => {
					setLoading(false);
				});
		}

		return () => router.replace(`/businesses/${slug}`, undefined);
	}, [slug]);

	return (
		<div className="flex gap-4 overflow-auto py-2 no-scrollbar">
			{loading && <TagsLoader />}
			{data?.map((item: ProductTypesType) => (
				<button
					onClick={() => chipClickHandler(item.id)}
					key={item.id}
					className="shrink-0 cursor-pointer">
					<Chip
						className={`${
							active === item.id
								? "bg-secondary  text-white"
								: "bg-white"
						} border-gray-200 border py-2 px-4`}
						text={item.name}
					/>
				</button>
			))}
		</div>
	);
};

export default CategoriesSlider;
