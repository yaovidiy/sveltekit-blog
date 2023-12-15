import { editCategory, getOneCategory } from '$lib/server/db/categories.js';

export async function load({ params }) {
	try {
		const category = await getOneCategory(parseInt(params.slug));

    return {
      category
    }
	} catch (err) {
    return {
      category: null,
    }
  }
}

export const actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const data = {
				rowid: formData.get('id'),
				name: formData.get('name')
			};
			const res = await editCategory(data);

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
