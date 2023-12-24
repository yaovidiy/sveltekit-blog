import { loadNextArticlesByCursor } from '$lib/server/db/articles';
import { json, error } from '@sveltejs/kit';

export async function POST({ request }) {
	try {
		const body = await request.json();
		const articles = await loadNextArticlesByCursor(1, body.lastId);

		return json(articles);
	} catch (err) {
		console.log(err);

		return json({ message: 'something when wrong, check logs' });
	}
}
