import Image from "next/image";
import React, { ReactNode } from "react";

interface Data {
	setIsOpened: Function;
	isOpened: boolean;
}

const Modal = ({ data, children }: { data: Data; children: ReactNode }) => {
	const { setIsOpened, isOpened } = data;

	const handleClose = () => setIsOpened(false);
	return (
		<>
			{isOpened && (
				<div
					onClick={handleClose}
					className="fixed inset-0 z-50 transition-opacity duration-300 ease-in-out bg-gray-500 bg-opacity-75">
					<div className="flex items-center justify-center min-h-screen px-4 pt-4">
						<div
							onClick={(e) => e.stopPropagation()}
							className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md relative">
							<div className="top-2  cursor-pointer text-3xl mt-2 w-full flex items-end justify-end px-4">
								<button
									className="left-10"
									onClick={handleClose}>
									<Image
										src={"/close.svg"}
										width={30}
										height={30}
										alt="close"
									/>
								</button>
							</div>
							<div className="flex flex-col px-4 py-2 text-black">
								{children}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
