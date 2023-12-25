import { getOneArticle } from '$lib/server/db/articles';

export async function load({ params }) {
	const id = params.id;

	const article = await getOneArticle(parseInt(id));

	return {
		article
	};
}
