import { getOneArticle, updateOneArticle } from '$lib/server/db/articles.js';
import { getAllCategories } from '$lib/server/db/categories.js';
import UploadImage from '$lib/server/utils/imageUpload.js';

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

			if (typeof thumbnail !== 'string' && thumbnail.size) {
				const { url } = await UploadImage(thumbnail);

				thumbnail = url;
			}

			if (!thumbnail.size) {
				thumbnail = null;
			}

			const data = {
				title: formData.get('title'),
				categoryID: isNaN(formData.get('categoryId')) ? null : parseInt(formData.get('categoryId')),
				status: parseInt(formData.get('status')),
				id: parseInt(formData.get('id')),
				description: formData.get('description'),
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
