import { Footer, Navbar } from "components";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Roboto, Tajawal } from "next/font/google";
import ClientProviders from "providers/client-providers";
import "styles/globals.css";

const roboto = Roboto({ weight: ["700"], preload: false });
const tajawal = Tajawal({ weight: ["700"], preload: false });

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
	params,
}: Readonly<{
	children: React.ReactNode;
	params: any;
}>) {
	unstable_setRequestLocale(params.locale);

	const navbarT = useTranslations("navbar");

	const businessT = useTranslations("business");

	const footerT = useTranslations("footer");

	return (
		<div
			dir={params.locale === "ar" ? "rtl" : "ltr"}
			lang={params.locale}
			className={
				params.locale === "ar" ? tajawal.className : roboto.className
			}>
			<Navbar
				translation={{
					home: navbarT("home"),
					forBusinesses: navbarT("forBusinesses"),
					blog: navbarT("blog"),
					addPlace: navbarT("addPlace"),
					ex: navbarT("ex"),
					where: navbarT("where"),
					currentLocation: navbarT("currentLocation"),
					placeName: navbarT("placeName"),
					city: navbarT("city"),
					address: navbarT("address"),
					description: navbarT("description"),
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
