import { useTranslations } from "next-intl";
import * as yup from "yup";

const useAddBusinessFormSchema = () => {
	const validationT = useTranslations("validation");

	return yup.object({
		name: yup
			.string()
			.required(validationT("required"))
			.min(3, validationT("minLength", { minLength: 3 })),
		city: yup.string().required(validationT("required")),
		address: yup
			.string()
			.required(validationT("required"))
			.min(3, validationT("minLength", { minLength: 3 })),
		description: yup.string().required(validationT("required")),
		image: yup.mixed().required(validationT("required")),
	});
};

export default useAddBusinessFormSchema;
