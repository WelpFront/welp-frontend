import { useCallback, useRef } from "react";

const useGetLastElement = (
	loading: boolean,
	hasMore: boolean,
	action: Function
) => {
	const observer = useRef<IntersectionObserver | null>(null);

	const lastElement = useCallback(
		(node: any) => {
			if (loading) return;

			if (observer.current) observer.current.disconnect();

			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) action();
			});

			if (node) observer.current.observe(node);
		},
		[loading, hasMore]
	);

	return { lastElement };
};

export default useGetLastElement;
