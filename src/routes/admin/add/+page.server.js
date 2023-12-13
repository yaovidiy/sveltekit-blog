import { writeFile } from 'node:fs/promises';
import { extname } from 'path';
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
		try {
			const formData = await request.formData();
			const uploadedFile = formData.get('image');
			let filename = null;
			if (uploadedFile) {
				filename = `static/uploads/${crypto.randomUUID()}${extname(uploadedFile?.name)}`;
				await writeFile(filename, Buffer.from(await uploadedFile?.arrayBuffer()));
			}
			const data = {
				title: formData.get('title'),
				categoryID: isNaN(formData.get('categoryId')) ? null : parseInt(formData.get('categoryId')),
				status: parseInt(formData.get('status')),
				thumbnail: filename && filename.replace('static/', '')
			};
			const res = await addArticle(data);

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
