import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClientProviders = ({ children }: { children: any }) => {
	return (
		<div>
			{children}
			<ToastContainer autoClose={false} hideProgressBar />
		</div>
	);
};

export default ClientProviders;
