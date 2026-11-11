import { getCollection, type CollectionEntry } from 'astro:content';

export async function getVisibleNews(): Promise<CollectionEntry<'news'>[]> {
	const entries = await getCollection('news', ({ data }) => import.meta.env.DEV || !data.draft);

	return entries.sort((left, right) => right.data.publishedAt.localeCompare(left.data.publishedAt));
}

export async function getVisiblePages(): Promise<CollectionEntry<'pages'>[]> {
	const entries = await getCollection('pages', ({ data }) => import.meta.env.DEV || !data.draft);

	return entries.sort((left, right) => {
		const orderDifference = (left.data.order ?? Number.MAX_SAFE_INTEGER) - (right.data.order ?? Number.MAX_SAFE_INTEGER);

		return orderDifference || left.data.title.localeCompare(right.data.title, 'pt-BR');
	});
}

export function formatEditorialDate(value: string): string {
	const date = new Date(`${value}T00:00:00Z`);

	return new Intl.DateTimeFormat('pt-BR', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC',
	}).format(date);
}
