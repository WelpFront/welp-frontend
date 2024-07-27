"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { CustomMap, CustomMapInput, FileInput, FileLink } from "atoms";
import { fileData } from "data/accept";
import { useForm } from "react-hook-form";
import { FaPhone } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoCameraOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { addBusinessFormSchema } from "schemas";
import { renderField } from "utils";

const AddPlacesForm = ({ translation }: { translation: any }) => {
	const schema = addBusinessFormSchema();

	const { acceptedExtensions } = fileData;
	const {
		control,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const images = watch("images") || [];

	const setLatHandler = (lat: number) => {
		setValue("latitude", lat);
	};

	const setLngHandler = (lng: number) => {
		setValue("longitude", lng);
	};

	return (
		<form className="flex flex-col gap-2 [scrollbar-width:10px] w-full max-h-96 py-3 px-1 overflow-auto ">
			{renderField(
				"text",
				"name",
				translation.placeName,
				"",
				control,
				errors?.name?.message,
				<IoPerson className="w-4 h-4 text-gray-400" />
			)}
			{renderField(
				"auto-complete",
				"email",
				translation.city,
				"",
				control,
				errors?.name?.message,
				<MdEmail className="w-4 h-4 text-gray-400" />
			)}
			{renderField(
				"text",
				"phone",
				translation.address,
				"",
				control,
				errors?.name?.message,
				<FaPhone className="w-4 h-4 text-gray-400" />
			)}
			<div className="h-32 w-full rounded-3xl">
				<CustomMapInput setLat={setLatHandler} setLng={setLngHandler} />
			</div>
			{renderField(
				"text-area",
				"message",
				translation.description,
				"",
				control,
				errors?.name?.message
			)}
			<div className="flex flex-col items-start justify-center w-full py-2 mt-2">
				<FileInput
					icon={<IoCameraOutline />}
					accept={Object.values(acceptedExtensions).join(",")}
					className=" border border-gray-300 rounded-3xl w-full p-3 text-yellow-500"
					onChange={(e) => {
						const newFiles = Array.from(e.target.files);
						const newImages = newFiles.filter(
							(newFile: any) =>
								!images.some(
									(existingFile) =>
										existingFile.name === newFile.name
								)
						);
						setValue("images", [...images, ...newImages]);
					}}
				/>
				{images?.length > 0 &&
					images?.map((image: any) => (
						<FileLink
							key={image?.name}
							withDelete
							deleteAction={() =>
								setValue(
									"images",
									images.filter(
										(file) => file.name !== image.name
									)
								)
							}
							fileName={image?.name}
						/>
					))}
			</div>

			<button className="bg-yellow-main text-white p-3 rounded-3xl">
				{translation.sendRequest}
			</button>
		</form>
	);
};

export default AddPlacesForm;
