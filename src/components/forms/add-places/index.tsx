"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { FileInput, FileLink } from "atoms";
import { fileData } from "data/accept";
import { useForm } from "react-hook-form";
import { CiLocationOn, CiMap } from "react-icons/ci";
import { IoCameraOutline } from "react-icons/io5";
import { addBusinessFormSchema } from "schemas";
import { useCitiesStore } from "store/cities";
import { renderField } from "utils";

const AddPlacesForm = ({
	translation,
	setOpen,
}: {
	translation: any;
	setOpen: (state: boolean) => void;
}) => {
	const schema = addBusinessFormSchema();

	const cities = useCitiesStore((state) => state.cities);

	const formattedCities = cities.map((city) => ({
		label: city.name,
		value: city.id,
	}));

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

	const addPlaceHandler = (e: any) => console.log(e, "data");

	return (
		<form
			onSubmit={handleSubmit(addPlaceHandler)}
			className="flex flex-col gap-2 [scrollbar-width:10px] w-full  overflow-auto max-h-[82vh] py-2 px-1 ">
			{renderField(
				"text",
				"name",
				translation.placeName,
				"",
				control,
				errors?.name?.message,
				<CiLocationOn className="w-4 h-4 text-gray-400" />
			)}
			{renderField(
				"auto-complete",
				"city",
				translation.city,
				"",
				control,
				errors?.name?.message,
				null,
				formattedCities
			)}
			{renderField(
				"text",
				"phone",
				translation.address,
				"",
				control,
				errors?.name?.message,
				<CiMap className="w-4 h-4 text-gray-400" />
			)}

			{renderField(
				"text-area",
				"message",
				translation.description,
				"",
				control,
				errors?.name?.message
			)}
			<div className="flex flex-col items-start justify-center w-full py-2 ">
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

			<div className="flex gap-1 w-full items-center justify-center">
				<button
					type="submit"
					className="bg-yellow-main flex-1 text-white px-3 py-1 rounded-3xl">
					{translation.sendRequest}
				</button>
				<button
					type="button"
					onClick={() => setOpen(false)}
					className="bg-transparent border  flex-1 border-yellow-500 text-yellow-500 px-3 py-1 rounded-3xl">
					{translation.cancel}
				</button>
			</div>
		</form>
	);
};

export default AddPlacesForm;
