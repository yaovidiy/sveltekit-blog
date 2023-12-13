import { writeFile } from 'node:fs/promises';
import { extname } from 'path';
import { getOneArticle, updateOneArticle } from '$lib/server/db/articles.js';
import { getAllCategories } from '$lib/server/db/categories.js';

export async function load({ params }) {
	const articleData = await getOneArticle(parseInt(params.slug));
	const allCats = await getAllCategories();
	return {
		article: articleData,
		categories: allCats
	};
}

export const actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			let thumbnail = formData.get('image');

			if (typeof thumbnail !== 'string') {
				const filename = `static/uploads/${crypto.randomUUID()}${extname(thumbnail?.name)}`;
				await writeFile(filename, Buffer.from(await thumbnail?.arrayBuffer()));
				thumbnail = filename.replace('static/', '');
			}
			const data = {
				title: formData.get('title'),
				categoryID: formData.get('categoryId') || null,
				status: formData.get('status'),
				id: formData.get('id'),
				description: '',
				thumbnail
			};
			const res = await updateOneArticle(data);

			return {
				success: res
			};
		} catch (err) {
			return {
				success: false
			};
		}
	}
};
