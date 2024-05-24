import { ProductTypesType } from "interfaces";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { getBusinessProductTypes } from "services";

const useCategoriesList = (slug: number) => {
	const [loading, setLoading] = useState(true);

	const [data, setData] = useState<Array<ProductTypesType>>([]);

	const router = useRouter();

	const pathname = usePathname();

	const searchParams = useSearchParams();

	const type = searchParams.get("type");

	const [active, setActive] = useState<number | null>(
		type ? parseInt(type) : null
	);

	const createQueryString = useCallback(
		(name: string, value: any) => {
			const params = new URLSearchParams(searchParams.toString());

			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);

	useEffect(() => {
		if (slug) {
			setLoading(true);
			getBusinessProductTypes(slug)
				.then((res) => {
					setData(res);

					if (res.length > 0) {
						setActive(type || res[0]?.id);
						if (!type) {
							router.push(
								pathname +
									"?" +
									createQueryString("type", res[0]?.id)
							);
						}
					}
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [slug, router]);

	return {
		active: active && parseInt(`${active}`),
		setActive,
		data,
		loading,
		createQueryString,
		router,
		pathname,
	};
};

export default useCategoriesList;
