const defaultLocale = "ar";
const locales = ["en", "ar"];

const pathnames = [
	"/",
	"/users",
	"/categories",
	"/businesses",
	"/biz/businesses",
];

const host = "http://localhost:3000";

export default function sitemap() {
	return [
		...pathnames
			.map((pathname) => {
				return locales.map((locale) => ({
					url: getUrl(pathname, locale),
					lastModified: new Date(),
				}));
			})
			.flat(),
	];
}

function getUrl(pathname: string, locale: string) {
	return `${host}/${locale}${pathname === "/" ? "" : pathname}`;
}
