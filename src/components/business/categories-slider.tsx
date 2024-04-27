import { Chip } from "atoms";

const CategoriesSlider = () => {
	const dt: Array<{ name: string; value: number }> = [
		{ name: "chip1", value: 1 },
		{ name: "chip2", value: 2 },
		{ name: "chip3", value: 3 },
		{ name: "chip4", value: 4 },
		{ name: "chip4", value: 5 },
		{ name: "chip4", value: 6 },
		{ name: "chip4", value: 7 },
		{ name: "chip4", value: 8 },
		{ name: "chip4", value: 9 },
		{ name: "chip4", value: 10 },
		{ name: "chip4", value: 11 },
	];
	return (
		<div className="flex gap-4 overflow-auto py-2 no-scrollbar">
			{dt.map((item) => (
				<div key={item.value} className="shrink-0">
					<Chip text={item.name} />
				</div>
			))}
		</div>
	);
};

export default CategoriesSlider;
