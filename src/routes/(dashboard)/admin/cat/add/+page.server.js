import { addCategory } from '$lib/server/db/categories.js';

export const actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const name = formData.get('name');

			const res = await addCategory(name);

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
