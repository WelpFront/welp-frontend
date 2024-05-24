"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClientProviders = ({ children }: { children: any }) => {
	return (
		<div>
			{children}
			<ProgressBar
				height="4px"
				color="#FF0000"
				options={{ showSpinner: false }}
				shallowRouting
			/>
			<ToastContainer autoClose={false} hideProgressBar />
		</div>
	);
};

export default ClientProviders;
