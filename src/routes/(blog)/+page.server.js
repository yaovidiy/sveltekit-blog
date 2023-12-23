import { getFirstArticles, countArticles } from '$lib/server/db/articles';

export async function load() {
	const articles = await getFirstArticles(1);
	const total = await countArticles();

	return {
		articles,
		total
	};
}
