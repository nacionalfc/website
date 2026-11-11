import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const editorialDate = z.iso.date();

const news = defineCollection({
	loader: glob({ base: './src/content/news', pattern: '**/*.md' }),
	schema: z
		.object({
			title: z.string().trim().min(1),
			publishedAt: editorialDate,
			updatedAt: z.preprocess(
				(value) => (value === '' || value === null ? undefined : value),
				editorialDate.optional(),
			),
			summary: z.string().trim().min(1).max(280),
			draft: z.boolean().default(true),
			featuredImage: z.string().optional(),
			featuredImageAlt: z.string().optional(),
		})
		.superRefine((entry, context) => {
			if (entry.featuredImage && entry.featuredImageAlt === undefined) {
				context.addIssue({
					code: 'custom',
					path: ['featuredImageAlt'],
					message: 'Provide alt text, or an empty value when the image is decorative.',
				});
			}
		}),
});

const pages = defineCollection({
	loader: glob({ base: './src/content/pages', pattern: '**/*.md' }),
	schema: z
		.object({
			title: z.string().trim().min(1),
			description: z.string().trim().min(1).max(280),
			heroImage: z.string().optional(),
			heroImageAlt: z.string().optional(),
			order: z.number().int().nonnegative().optional(),
			draft: z.boolean().default(true),
		})
		.superRefine((entry, context) => {
			if (entry.heroImage && entry.heroImageAlt === undefined) {
				context.addIssue({
					code: 'custom',
					path: ['heroImageAlt'],
					message: 'Provide alt text, or an empty value when the image is decorative.',
				});
			}
		}),
});

export const collections = { news, pages };
