"use client";

import { Chip, TagsLoader } from "atoms";
import { ProductTypes } from "interfaces";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { getBusinessProductTypes } from "services";

const CategoriesSlider = ({ id }: { id: number }) => {
	const [loading, setLoading] = useState(true);

	const [data, setData] = useState<Array<ProductTypes>>([]);

	const router = useRouter();

	const pathname = usePathname();

	const searchParams = useSearchParams();

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);

	useEffect(() => {
		if (id) {
			setLoading(true);
			getBusinessProductTypes(id)
				.then((res) => {
					setData(res);
					router.push(
						pathname + "?" + createQueryString("type", res[0]?.id)
					);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [id]);

	return (
		<div className="flex gap-4 overflow-auto py-2 no-scrollbar">
			{loading && <TagsLoader />}
			{data.map((item: ProductTypes) => (
				<div key={item.id} className="shrink-0">
					<Chip text={item.name} />
				</div>
			))}
		</div>
	);
};

export default CategoriesSlider;
