import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
	if (!site) {
		throw new Error('Set the production site URL in astro.config.mjs to generate robots.txt.');
	}

	const sitemapUrl = new URL('/sitemap.xml', site).href;
	const robots = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;

	return new Response(robots, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};

export const prerender = true;
