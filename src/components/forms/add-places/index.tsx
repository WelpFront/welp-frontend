"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaPhone } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { businessRequestFormSchema } from "schemas";
import { renderField } from "utils";

const AddPlacesForm = ({ translation }: { translation: any }) => {
	const schema = businessRequestFormSchema();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	return (
		<form className="flex flex-col gap-2 w-full px-2 py-3">
			{renderField(
				"text",
				"name",
				translation.name,
				"",
				control,
				errors?.name?.message,
				<IoPerson className="w-4 h-4 text-gray-400" />
			)}
			{renderField(
				"text",
				"email",
				translation.email,
				"",
				control,
				errors?.name?.message,
				<MdEmail className="w-4 h-4 text-gray-400" />
			)}
			{renderField(
				"text",
				"phone",
				translation.phone,
				"",
				control,
				errors?.name?.message,
				<FaPhone className="w-4 h-4 text-gray-400" />
			)}
			{renderField(
				"text-area",
				"message",
				translation.message,
				"",
				control,
				errors?.name?.message
			)}

			<button className="bg-yellow-main text-white p-3 rounded-3xl">
				{translation.sendRequest}
			</button>
		</form>
	);
};

export default AddPlacesForm;
