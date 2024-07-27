"use client";

import React, { ReactNode, useRef } from "react";
import { FiUpload } from "react-icons/fi";

const FileInput = ({
	disabled,
	action,
	accept,
	icon,
	onChange,
	multiple = false,
	className,
}: {
	accept: string;
	onChange: (e: any) => void;
	disabled?: boolean;
	action?: string;
	icon?: ReactNode;
	multiple?: boolean;
	className?: string;
}) => {
	const ref = useRef<HTMLInputElement>(null);

	return (
		<div className="w-full">
			<input
				onChange={(e) => {
					if (e?.target?.files?.[0]) onChange(e);
				}}
				ref={ref}
				type="file"
				multiple={multiple}
				className="hidden"
				id="fileInput"
				accept={accept}
			/>
			<button
				disabled={disabled}
				type="button"
				className={`flex items-center justify-center gap-2 ${className}`}
				onClick={() => ref?.current?.click()}>
				{icon || <FiUpload />}
				{action}
			</button>
		</div>
	);
};

export default FileInput;
