import React from "react";

const RadioButton = ({
	label,
	disabled,
	checked = false,
	onChange,
}: {
	label: string;
	disabled?: boolean;
	checked?: boolean;
	onChange?: (e: any) => void;
}) => {
	return (
		<div className="flex items-center">
			<input
				id={label}
				type="radio"
				value=""
				disabled={disabled}
				onChange={onChange}
				name="radio"
				className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 focus:ring-blue-500   dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
			/>
			<label
				htmlFor={label}
				className="ms-2 text-sm font-medium text-gray-900 ">
				{label}
			</label>
		</div>
	);
};

export default RadioButton;
