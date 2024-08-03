import { env } from "next-runtime-env";

const defaultLocale = "ar";
const locales = ["en", "ar"];

const pathnames = [
	"/",
	"/users",
	"/categories",
	"/businesses",
	"/biz/businesses",
	"/download",
	"/contact",
	"/privacy",
	"/terms",
];

const host = env("NEXT_PUBLIC_FRONTEND_URL");

export default function sitemap() {
	return [
		...pathnames
			.map((pathname) => ({
				url: getUrl(pathname),
				lastModified: new Date(),
			}))
			.flat(),
	];
}

function getUrl(pathname: string) {
	return `${host}${pathname === "/" ? "" : pathname}`;
}
