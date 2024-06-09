"use client";

import { BusinessRequestForm } from "components";
import { IoIosSend } from "react-icons/io";

const BusinessRequest = ({ translation }: { translation: any }) => {
	return (
		<div className="my-7">
			<h3 className="text-xl my-1">{translation.request}</h3>

			<div className=" w-full rounded-3xl overflow-hidden border-1 border-solid border-gray-100 flex flex-col items-start justify-center ">
				<div className="bg-orange-200 p-3 w-full flex items-center justify-start gap-2">
					<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
						<IoIosSend className="w-6 h-6" />
					</div>
					{translation.sendRequest}
				</div>

				<BusinessRequestForm
					translation={{
						name: translation.name,
						phone: translation.phone,
						email: translation.email,
						message: translation.message,
						sendRequest: translation.sendRequest,
					}}
				/>
			</div>
		</div>
	);
};

export default BusinessRequest;
