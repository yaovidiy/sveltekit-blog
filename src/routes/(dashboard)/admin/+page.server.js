import { auth } from '$lib/server/lucia';
import { getAllArticles, deleteArticle } from '$lib/server/db/articles.js';
import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/signin');

	let allArticles = await getAllArticles();

	return {
		userId: session.user.userId,
		username: session.user.username,
		articles: allArticles,
	};
};

export const actions = {
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.auth.setSession(null); // remove cookie
		throw redirect(302, '/signin'); // redirect to login page
	},
	deleteArticle: async ({request}) => {
		try {
			const formData = await request.formData();
			const rowid = formData.get('id');
			const res = await deleteArticle(parseInt(rowid));

			return {
				deleted: res
			};
		} catch (err) {
			console.log(err);
			return {
				deleted: false
			};
		}
	}
};
