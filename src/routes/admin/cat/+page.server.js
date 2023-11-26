import { getAllCategories } from '$lib/server/db/categories';

export async function load() {
	const categories = await getAllCategories();

	return {
		categories
	};
}
