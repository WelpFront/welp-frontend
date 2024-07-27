import * as yup from "yup";

const addBusinessFormSchema = () => {
	return yup.object({
		name: yup.string().required("Required").min(3, "name is too short"),
		latitude: yup.number().required("Required"),
		longitude: yup.number().required("Required"),
		images: yup.array().required("Required"),
	});
};

export default addBusinessFormSchema;
