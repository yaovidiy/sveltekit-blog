import { auth } from '$lib/server/lucia';
import { dbExist } from '$lib/server/db/init';
import { getAllArticles, deleteArticle } from '$lib/server/db/articles.js';
import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/signin');

	const inited = await dbExist();
	let allArticles = await getAllArticles();

	return {
		userId: session.user.userId,
		username: session.user.username,
		inited,
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
			const rowid = formData.get('rowid');
			const res = await deleteArticle(rowid);

			return {
				deleted: res
			};
		} catch (err) {
			return {
				deleted: false
			};
		}
	}
};
