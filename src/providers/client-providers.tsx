"use client";

import { NextIntlClientProvider } from "next-intl";
import { useLocale } from "next-intl";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClientProviders = ({
	children,
	messages,
}: {
	children: any;
	messages: any;
}) => {
	const locale = useLocale();

	return (
		<section>
			<NextIntlClientProvider locale={locale} messages={messages}>
				{children}
				<ProgressBar
					height="4px"
					color="#FF0000"
					options={{ showSpinner: false }}
					shallowRouting
				/>
				<ToastContainer autoClose={false} hideProgressBar />
			</NextIntlClientProvider>
		</section>
	);
};

export default ClientProviders;
