import { getOneArticle, updateOneArticle } from '$lib/server/db/articles.js';
import { getAllCategories } from '$lib/server/db/categories.js';

export async function load({ params }) {
	const articleData = await getOneArticle(params.slug);
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
			const data = {
				title: formData.get('title'),
				categoryID: formData.get('categoryId'),
				status: formData.get('status'),
				rowid: formData.get('rowid'),
				description: ''
			};
      console.log(data);
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
