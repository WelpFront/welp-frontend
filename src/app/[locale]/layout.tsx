import { Footer, Navbar } from "components";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
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
	const navbarT = useTranslations("navbar");
	const footerT = useTranslations("footer");
	return (
		<html lang="ar" dir="rtl">
			<body className={kufi.className}>
				<Navbar
					translation={{
						home: navbarT("home"),
						forBusinesses: navbarT("forBusinesses"),
						blog: navbarT("blog"),
						addPlace: navbarT("addPlace"),
					}}
				/>
				<ClientProviders>{children}</ClientProviders>
				<Footer
					translation={{
						importantLinks: footerT("importantLinks"),
						bestPlatform: footerT("bestPlatform"),
						contactUs: footerT("contactUs"),
						address: footerT("address"),
						phone: footerT("phone"),
						email: footerT("email"),
						copyRights: footerT("copyRights"),
						welpCo: footerT("welpCo"),
					}}
				/>
			</body>
		</html>
	);
}
