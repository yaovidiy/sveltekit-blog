import { getAllCategories } from '$lib/server/db/categories';
import { addArticle } from '$lib/server/db/articles.js';
import UploadImage from '$lib/server/utils/imageUpload.js';

export async function load() {
	const allCategories = await getAllCategories();

	return {
		categories: allCategories
	};
}

export const actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const uploadedFile = formData.get('image');
			let filename = null;
			if (uploadedFile.size) {
				const { url } = await UploadImage(uploadedFile);

				filename = url;
			}
			const data = {
				title: formData.get('title'),
				categoryID: isNaN(formData.get('categoryId')) ? null : parseInt(formData.get('categoryId')),
				status: parseInt(formData.get('status')),
				description: formData.get('description'),
				thumbnail: filename
			};
			const res = await addArticle(data);

			return {
				success: res
			};
		} catch (err) {
			console.log(err);
			return {
				success: false
			};
		}
	}
};
