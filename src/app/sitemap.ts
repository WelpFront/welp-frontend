const defaultLocale = "ar";
const locales = ["en", "ar"];

const pathnames = [
	"/",
	"/users",
	"/categories",
	"/businesses",
	"/biz/businesses",
];

const host = process.env.NEXT_PUBLIC_FRONTEND_URL;

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
