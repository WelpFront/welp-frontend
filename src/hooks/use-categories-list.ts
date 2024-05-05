import { ProductTypesType } from "interfaces";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { getBusinessProductTypes } from "services";

const useCategoriesList = (slug: number) => {
	const [loading, setLoading] = useState(true);

	const [data, setData] = useState<Array<ProductTypesType>>([]);

	const [active, setActive] = useState<number | null>(null);

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

	useEffect(() => {
		let isMounted = true; // To track if the component is still mounted

		if (slug) {
			setLoading(true);
			getBusinessProductTypes(slug)
				.then((res) => {
					if (isMounted) {
						setData(res);

						if (res.length > 0) {
							setActive(res[0]?.id);
							router.push(
								pathname +
									"?" +
									createQueryString("type", res[0]?.id)
							);
						}
					}
				})
				.finally(() => {
					if (isMounted) {
						setLoading(false);
					}
				});
		}

		return () => {
			// Cleanup function to run when the component unmounts or when the dependency 'slug' changes
			isMounted = false; // Set isMounted to false to prevent state updates on unmounted components
			router.replace(`/businesses/${slug}`, undefined);
		};
	}, [slug, router]);

	return {
		active,
		setActive,
		data,
		loading,
		createQueryString,
		router,
		pathname,
	};
};

export default useCategoriesList;
