import type { APIRoute } from 'astro';
import { getVisibleNews, getVisiblePages } from '../lib/editorial';

const escapeXml = (value: string): string =>
	value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

export const GET: APIRoute = async ({ site }) => {
	if (!site) {
		throw new Error('Set the production site URL in astro.config.mjs to generate sitemap.xml.');
	}

	const [articles, pages] = await Promise.all([getVisibleNews(), getVisiblePages()]);
	const urls = [
		new URL('/', site).href,
		new URL('/noticias/', site).href,
		...articles.map((article) => new URL(`/noticias/${article.id}/`, site).href),
		...pages.map((page) => new URL(`/${page.id}/`, site).href),
	];

	const entries = urls.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`).join('\n');
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};

export const prerender = true;
