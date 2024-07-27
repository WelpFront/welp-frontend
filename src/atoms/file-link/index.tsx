import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const FileLink = ({
	fileName,
	withDelete,
	deleteAction,
}: {
	fileName: string;
	withDelete?: boolean;
	deleteAction?: () => void;
}) => {
	const fileInput = document.getElementById(
		"fileInput"
	) as HTMLInputElement | null;
	return (
		<div className="flex justify-between w-full mt-1">
			<p className="text-sm ">{fileName}</p>

			{withDelete && (
				<RiDeleteBin5Line
					onClick={() => {
						deleteAction && deleteAction();
						if (fileInput) fileInput.value = "";
					}}
					className="relative w-4 h-4 cursor-pointer shrink-0 hover:text-red-500"
				/>
			)}
		</div>
	);
};

export default FileLink;
