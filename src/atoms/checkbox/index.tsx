import React from "react";

const CheckBox = ({
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
		<div className="flex items-center  cursor-pointer">
			<input
				id={label}
				type="checkbox"
				name={label}
				disabled={disabled}
				value=""
				checked={checked}
				onChange={onChange}
				className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
			/>
			<label
				htmlFor={label}
				className="ms-2 text-sm select-none font-medium text-gray-900 ">
				{label}
			</label>
		</div>
	);
};

export default CheckBox;
