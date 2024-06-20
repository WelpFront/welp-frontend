import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import ClientProviders from "providers/client-providers";
import "styles/globals.css";

const kufi = Noto_Kufi_Arabic({ subsets: ["arabic"] });

export const metadata: Metadata = {
	title: {
		default: "Welp",
		template: "%s | Welp",
	},
	twitter: {
		card: "summary_large_image",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body className={kufi.className}>
				<ClientProviders>{children}</ClientProviders>
			</body>
		</html>
	);
}
