import React from "react";

interface Data {
	setIsOpened: Function;
	isOpened: boolean;
	title: string;
	description: string;
}

const Modal = ({ data }: { data: Data }) => {
	const { setIsOpened, isOpened, title, description } = data;

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
							<div className="flex flex-col p-6 text-black">
								<button
									className="absolute top-5 left-5 cursor-pointer"
									onClick={handleClose}>
									X
								</button>
								<h2 className="mb-8 text-xl font-bold leading-tight">
									{title}
								</h2>
								{description}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
