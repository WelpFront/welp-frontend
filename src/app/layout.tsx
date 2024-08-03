import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PublicEnvScript } from "next-runtime-env";
import { Noto_Kufi_Arabic } from "next/font/google";
import ClientProviders from "providers/client-providers";
import "styles/globals.css";

const kufi = Noto_Kufi_Arabic({ subsets: ["arabic"] });

export async function generateMetadata({
	params: { locale },
}: {
	params: any;
}): Promise<Metadata> {
	const t = await getTranslations({ locale, namespace: "metadata" });

	return {
		title: {
			default: t("welp"),
			template: `%s | ${t("welp")}`,
		},
		twitter: {
			card: "summary_large_image",
		},
	};
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<head>
				<PublicEnvScript />
			</head>
			<body className={kufi.className}>
				<ClientProviders>{children}</ClientProviders>
			</body>
		</html>
	);
}
