import { Footer, Navbar } from "components";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { Roboto } from "next/font/google";
import ClientProviders from "providers/client-providers";
import "styles/globals.css";

const roboto = Roboto({ weight: ["700"], preload: false });

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
	params,
}: Readonly<{
	children: React.ReactNode;
	params: any;
}>) {
	unstable_setRequestLocale(params.locale);

	const navbarT = useTranslations("navbar");

	const footerT = useTranslations("footer");

	return (
		<div
			dir={params.locale === "ar" ? "rtl" : "ltr"}
			lang={params.locale}
			className={roboto.className}>
			<Navbar
				translation={{
					home: navbarT("home"),
					forBusinesses: navbarT("forBusinesses"),
					blog: navbarT("blog"),
					addPlace: navbarT("addPlace"),
					ex: navbarT("ex"),
					where: navbarT("where"),
					currentLocation: navbarT("currentLocation"),
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
					getItOn: footerT("getItOn"),
					downloadItOn: footerT("downloadItOn"),
					download: footerT("download"),
					usa: footerT("usa"),
					losAngles: footerT("losAngles"),
					egypt: footerT("egypt"),
					cairo: footerT("cairo"),
					offices: footerT("offices"),
					home: footerT("home"),
					forBusinesses: footerT("forBusinesses"),
					termsConditions: footerT("termsConditions"),
					privacyPolicy: footerT("privacyPolicy"),
					blog: footerT("blog"),
					aboutUs: footerT("aboutUs"),
				}}
			/>
		</div>
	);
}
