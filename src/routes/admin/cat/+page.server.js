import { getAllCategories, deleteCategory } from '$lib/server/db/categories';

export async function load() {
	const categories = await getAllCategories();

	return {
		categories
	};
}

export const actions = {
	deleteCategory: async ({ request }) => {
		try {
			const formData = await request.formData();
			const rowid = formData.get('rowid');

			const deleteCat = await deleteCategory(rowid);

			return {
				deleted: deleteCat
			};
		} catch (err) {
			return {
				deleted: false
			};
		}
	}
};
