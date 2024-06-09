import * as yup from "yup";

const businessRequestFormSchema = () => {
	return yup.object({
		name: yup.string().required("Required").min(3, "name is too short"),
		email: yup
			.string()
			.required("Required")
			.email("please enter a valid email"),
		phone: yup.string().required("Required"),
		message: yup
			.string()
			.required("Required")
			.min(3, "message is too short"),
	});
};

export default businessRequestFormSchema;
