import { FacilitiesType } from "interfaces";
import { FaCheck } from "react-icons/fa6";

const Facilities = ({
	facilities,
	translation,
}: {
	facilities: Array<FacilitiesType>;
	translation: any;
}) => {
	const services = facilities.filter((item) => item.type === 1);
	const payment = facilities.filter((item) => item.type === 2);
	const benefit = facilities.filter((item) => item.type === 3);
	return (
		<div className="text-start">
			<h3 className="text-xl my-1">{translation.facilities}</h3>
			<div className="border-1 border-solid border-gray-100 p-3 rounded-3xl text-justify min-h-[40vh] overflow-y-auto">
				{services.length > 0 && (
					<div className="w-full my-4">
						<h3 className="text-lg my-1">{translation.services}</h3>
						<div className="my-3 grid grid-cols-2 md:grid-cols-4">
							{services.map((item, index) => (
								<h2
									key={item.id}
									className="flex items-center gap-1 text-md text-gray-400">
									<FaCheck />
									{item.name}
								</h2>
							))}
						</div>
					</div>
				)}
				{payment.length > 0 && (
					<div className="w-full my-4">
						<hr className="my-2" />
						<h3 className="text-lg my-1">{translation.payment}</h3>
						<div className="my-3 grid grid-cols-2 md:grid-cols-4">
							{payment.map((item) => (
								<h2
									key={item.id}
									className="flex items-center gap-1 text-md text-gray-400">
									<FaCheck />
									{item.name}
								</h2>
							))}
						</div>
					</div>
				)}
				{benefit.length > 0 && (
					<div className="w-full my-4">
						<hr className="my-2" />
						<h3 className="text-lg my-1">{translation.benefit}</h3>
						<div className="my-3 grid grid-cols-2 md:grid-cols-4">
							{benefit.map((item) => (
								<h2
									key={item.id}
									className="flex items-center gap-1 text-md text-gray-400">
									<FaCheck />
									{item.name}
								</h2>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Facilities;
