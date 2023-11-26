import { getAllCategories } from '$lib/server/db/categories';
import { addArticle } from '$lib/server/db/articles.js';

export async function load() {
	const allCategories = await getAllCategories();

	return {
		categories: allCategories
	};
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const data = {
			title: formData.get('title'),
			categoryID: formData.get('categoryId'),
			status: formData.get('status')
		};
		const res = await addArticle(data);

		return {
			success: res
		};
	}
};
