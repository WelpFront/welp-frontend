import { MetadataRoute } from "next";

const pathnames = [
	"/",
	"/users",
	"/categories",
	"/businesses",
	"/biz/businesses",
];

const host = process.env.NEXT_PUBLIC_FRONTEND_URL;

export default function sitemap(): MetadataRoute.Sitemap {
	return pathnames.map((pathname) => ({
		url: getUrl(pathname),
		lastModified: new Date().toISOString(),
		alternates: {
			languages: {
				ar: getUrl(`/ar${pathname}`),
				en: getUrl(`/en${pathname}`),
			},
		},
	}));
}

function getUrl(pathname: string) {
	return `${host}${pathname === "/" ? "" : pathname}`;
}
